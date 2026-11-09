import { createRequire } from "module";

const require = createRequire("/tmp/ppt/package.json");
const puppeteer = require("puppeteer-core");

const SECRET_NAME = "AvaSecretName99";
const SECRET_INCHES = "42.5";
const PORT = 8765;

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"]
});
const page = await browser.newPage();
const pageErrors = [];
page.on("pageerror", err => pageErrors.push(String(err)));

await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: "networkidle0" });
await page.evaluate((name, inches) => {
  const raw = JSON.parse(localStorage.getItem("jumpHigher.v1") || "{}");
  raw.name = name;
  raw.goalJump = inches;
  raw.jumps = [{ date: "2026-11-01", inches: Number(inches) }];
  raw.logs = { "2026-11-01": { "squat-jumps": { sets: "3", reps: "8", done: true } } };
  localStorage.setItem("jumpHigher.v1", JSON.stringify(raw));
}, SECRET_NAME, SECRET_INCHES);
await page.reload({ waitUntil: "networkidle0" });

const missing = await page.evaluate(() => {
  const previous = window.gtag;
  window.gtag = undefined;
  let threw = false;
  try {
    track("workout_start", {
      level: "Warm-Up",
      workout_name: "Warm-Up #1 - Quiet Feet",
      inches: 42.5,
      name: "AvaSecretName99",
      state: JSON.parse(localStorage.getItem("jumpHigher.v1"))
    });
    track("progress_log");
  } catch (err) {
    threw = true;
  }
  window.gtag = previous;
  return threw;
});
assert(missing === false, "track threw while gtag was missing");

await page.evaluate(() => {
  window.__events = [];
  window.gtag = function () {
    window.__events.push(Array.from(arguments));
  };
});

await page.evaluate(() => {
  track("workout_start", {
    level: "Lite",
    workout_name: "Lite Workout #2 - Power Pop",
    inches: 42.5,
    name: "AvaSecretName99",
    sets: "3",
    reps: "8",
    notes: "knee pain",
    state: JSON.parse(localStorage.getItem("jumpHigher.v1"))
  });
});

await page.click("[data-level='warmup']");
await page.click("[data-load-plan='starter-quiet-feet']");
await page.waitForFunction(() => document.getElementById("todayTitle").textContent.includes("Quiet Feet"));
const ids = await page.evaluate(() => state.checklist.slice());
for (const id of ids) {
  await page.click(`[data-toggle-done="${id}"]`);
}
await page.click("[data-tab='progress']");
await page.evaluate(() => {
  document.getElementById("jumpInches").value = "42.5";
  document.getElementById("addJumpBtn").click();
});
await page.click("[data-tab='settings']");
await page.click("#exportBtn");

const recorded = await page.evaluate(() => window.__events);
const blob = JSON.stringify(recorded);
assert(!blob.includes(SECRET_NAME), "athlete name leaked into analytics");
assert(!blob.includes(SECRET_INCHES), "jump measurement leaked into analytics");
assert(!blob.includes("knee pain"), "note leaked into analytics");
assert(!blob.includes("jumpHigher.v1"), "storage key leaked into analytics");
assert(!blob.includes("squat-jumps"), "saved exercise log leaked into analytics");

const names = recorded.filter(entry => entry[0] === "event").map(entry => entry[1]);
assert(names.includes("workout_start"), "workout_start missing");
assert(names.includes("workout_complete"), "workout_complete missing");
assert(names.includes("level_select"), "level_select missing");
assert(names.includes("progress_log"), "progress_log missing");
assert(names.includes("data_export"), "data_export missing");
assert(names.includes("screen_view"), "screen_view missing");

for (const entry of recorded) {
  if (entry[0] !== "event" || !entry[2]) continue;
  for (const value of Object.values(entry[2])) {
    assert(typeof value === "string", "event param was not a string");
    assert(!value.includes(SECRET_NAME), "param contains saved name");
    assert(value !== SECRET_INCHES, "param contains saved inches");
  }
}

const start = recorded.find(entry => entry[1] === "workout_start" && entry[2] && entry[2].workout_name === "Warm-Up #1 - Quiet Feet");
assert(start, "named workout_start missing");
assert(start[2].level === "Warm-Up", "workout_start level");
assert(!("inches" in start[2]) && !("name" in start[2]) && !("state" in start[2]), "disallowed keys were sent");

assert(pageErrors.length === 0, pageErrors.join("\n"));
await browser.close();
console.log("ANALYTICS_PRIVACY_PASS", names.length);
