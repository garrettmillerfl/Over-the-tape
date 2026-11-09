# Over The Tape

Volleyball vertical-jump workout tracker for an aspiring player.

https://garrettmillerfl.github.io/Over-the-tape/

## Brand

The app uses the black rounded-tile mark: a light-blue volleyball, a white jumper, and a light-blue arrow. The wordmark is OVER THE in white and TAPE in light blue. The tagline is Volleyball Jump Tracker.

| Role | Hex |
|---|---|
| Page background | `#0B0D10` |
| Card | `#14181C` |
| Primary accent and glow | `#74BCE2` |
| Navy | `#1B3A6B` |
| Text | `#FFFFFF` |

`assets/logo.png` is the header and splash logo. `assets/icon-180.png`, `assets/icon-192.png`, `assets/icon-512.png`, and `assets/favicon.png` are the same tile on solid black. `assets/icon-maskable-512.png` keeps that tile inside the maskable safe area. `assets/logo-original.jpg` is the source artwork.

## What is in the app

The page is one self-contained file. Workouts, Today, Progress, and Settings stay in the browser under `localStorage` key `jumpHigher.v1`. Existing exercise IDs are unchanged, so older logs, checklists, and jump history still resolve after this update. Import and export still use that same saved object.

Starter routines are bodyweight and lower-impact. Optional routines add a light dumbbell, band, or kettlebell. Barbells, Olympic lifts, depth jumps, hurdle jumps, loaded jumps, and turning jumps are in a separate coach-only section and ask for confirmation before they load. Nothing here is a complete weekly program, a max-lift prescription, or a promise of more inches or fewer injuries.

The shared 30-exercise list was generated content, not a vetted youth plan. Drills that were already in the library (Bulgarian split squat, reverse lunge, tuck jump, two-foot pogo hops, approach jump, split squat jumps, lateral bounds, skater jumps, and two-foot stick landings) kept their original IDs. New single-leg pogo hops and single-leg stick landings were added beside those, not as replacements.

## How the dosing was chosen

Starter strength work follows the American Academy of Pediatrics clinical report: technique first, qualified supervision when load or skill goes up, about 1–2 sets of 8–12 reps at a low intensity for beginners, 2–3 nonconsecutive days a week, and no requirement to test a 1-rep max in this app. See Stricker, Faigenbaum, McCambridge, and the Council on Sports Medicine and Fitness, “Resistance Training for Children and Adolescents,” *Pediatrics* 145, no. 6 (2020): e20201011, https://doi.org/10.1542/peds.2020-1011.

Jump volume stays short, with full rest, because youth plyometric guidance says to start with low-intensity jumps and sound landings (hips, knees, and a whole-foot contact) and to treat depth jumps and hurdle work as later steps, not the default. Quality matters more than contact count. See Lloyd, Meyers, and Oliver, “The Natural Development and Trainability of Plyometric Ability During Childhood,” *Strength & Conditioning Journal* 33, no. 2 (2011): 23–32, https://journals.lww.com/nsca-scj/fulltext/2011/04000/the_natural_development_and_trainability_of.2.aspx.

The NSCA youth resistance-training position statement is the background for supervised, progressive loading and for keeping Olympic-style lifts with a coach who can actually teach them: Faigenbaum et al., *Journal of Strength and Conditioning Research* 23, no. 5 Suppl (2009): S60–S79, https://www.nsca.com/globalassets/about/position-statements/position_stand_youth_resistance_training---2009.pdf/.

Routine titles are Warm-Up, Lite, and Moderate, plus Advanced for the coach-supervised days. Exercise lists and ids are unchanged, so a saved plan still opens the same drills under the new name.

## Analytics

The page loads Google Analytics 4 (`G-0X84W0N73J`) with Google signals and ad personalization turned off. Automatic page views are off. Each in-app screen sends `page_view` and `screen_view` with the screen name Workouts, Today, Progress, or Settings.

`track()` drops anything that is not a short string on an allowed key, and it does nothing if `gtag` is missing. Events never include the athlete name, notes, set or rep counts, jump inches, or the `jumpHigher.v1` save.

| Event | When it fires | Parameters |
|---|---|---|
| `page_view` | A tab opens, including the first Workouts view | `page_title`, `page_location`, `screen_name` |
| `screen_view` | Same screen change | `screen_name`, `app_name` |
| `workout_start` | A routine is loaded onto Today | `level` (Warm-Up, Lite, Moderate, or Advanced), `workout_name` |
| `workout_complete` | Every exercise on the loaded routine is marked done | `level`, `workout_name` |
| `exercise_video_open` | The refresher sheet opens, and again if the YouTube link is clicked | `exercise_name` |
| `level_select` | Warm-Up, Moderate, or Advanced filter is chosen | `level` |
| `advanced_gate_confirm` | The coach confirmation is accepted | none |
| `progress_log` | An exercise is marked done, or a jump measurement is saved | none |
| `data_export` | A backup file is downloaded | none |
| `data_import` | A backup file imports successfully | none |
| `pwa_install` | The browser reports the page was installed | none |

There is no install button in the app. `pwa_install` only runs if the browser fires `appinstalled`.

Demo links are listed in `docs/video-duration-audit.md`. YouTube's own watch page was bot-blocked in this environment, so durations are the public Invidious `lengthSeconds` values, and only clips under 30 seconds are linked. The trap-bar speed pull is a speed pull, not a high pull. Banded squat jumps use the Short at https://www.youtube.com/shorts/EiN7xOEEY64. Cue text in the app still asks for a soft whole-foot landing.
