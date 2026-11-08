# Video duration audit

Every exercise refresher was checked on 8 Nov 2026.

YouTube's watch page from this environment returned `playabilityStatus: LOGIN_REQUIRED` ("Sign in to confirm you're not a bot") and did not include `lengthSeconds`. oEmbed was not used for duration, because it has none. Durations below are the integer `lengthSeconds` field from the public Invidious videos API, `GET https://yt.chocolatemoo53.com/api/v1/videos/{id}`, called on the video object (not the search hit) for both the original link and any replacement. A clip was kept or used only when that value was strictly under 30. No start-time offsets. Thumbnails are YouTube's public `https://img.youtube.com/vi/{id}/hqdefault.jpg` for the id that is actually linked (HTTP 200, JPEG).

These seconds are not a direct read of YouTube's own player, because that page was blocked. They are one public mirror of YouTube's published length. Nothing below is marked YouTube-page-verified.

A later pass removed `33rJ7o9FSz4` ("Banded Squat Jumps | ARMR-UP Movements") and briefly used `oUKgQH7wJFQ`, a feet-down squat. The linked clip is now the requested Short `EiN7xOEEY64`, titled "Banded Squat Jumps". The volleyball approach storyboard still shows an approach. The trap-bar speed-pull storyboard sheet is only 48 pixels wide, so the bar path is not visible there; that link stays because its title is a dynamic-effort speed pull, not a high pull.

Unresolved exercises: none. Longest current link: Lateral Bounds, 29 seconds.

| Exercise | Original URL | Original seconds | Current URL | Current seconds | Title on the current video | What changed |
|---|---|---:|---|---:|---|---|
| Squat Jumps | https://www.youtube.com/watch?v=YGGq0AE5Uyc | 13 | same | 13 | Squat Jump | Kept |
| Box Jumps (Low Box) | https://www.youtube.com/watch?v=h1YkVa7mnRU | 196 | https://www.youtube.com/watch?v=W5QzqIbEWvk | 14 | Box Jump Step Down - OPEX Exercise Library | Replaced |
| Pogo Hops | https://www.youtube.com/watch?v=c2LBofIzUqs | 32 | https://www.youtube.com/watch?v=EjwLFHvrHss | 23 | Pogo Hops \| Exercise Demonstration | Replaced |
| Tuck Jumps | https://www.youtube.com/watch?v=Yl7tEmpzknY | 16 | same | 16 | Onnit Tutorials \| Tuck Jumps | Kept |
| Lateral Bounds | https://www.youtube.com/watch?v=pTm9T-5f7go | 29 | same | 29 | Lateral Bounds | Kept |
| Skater Jumps | https://www.youtube.com/watch?v=5gtLC5BgN7Q | 44 | https://www.youtube.com/watch?v=IIfU9N1zFQc | 17 | How To Do Skater Hops Step-by-Step \| Exercise Library | Replaced |
| Single-Leg Hops | https://www.youtube.com/watch?v=WlR8BX6aZZY | 65 | https://www.youtube.com/watch?v=rFMpFXz_3cE | 11 | Single leg hops Demo | Replaced |
| Split Squat Jumps | https://www.youtube.com/watch?v=kneZ1IWUQUY | 50 | https://www.youtube.com/watch?v=WfPJ8jaw4Fc | 9 | Alternating Jumping Lunge | Replaced |
| Broad Jumps | https://www.youtube.com/watch?v=7Du1KbwCdUk | 46 | https://www.youtube.com/watch?v=sHHZ296kBHE | 10 | Broad Jump Exercise Demo Video | Replaced |
| Calf Raises | https://www.youtube.com/watch?v=gwLzBJYoWlI | 139 | https://www.youtube.com/watch?v=Km0QS46bTEA | 12 | Standing calf raises | Replaced |
| Glute Bridges | https://www.youtube.com/watch?v=ugbRWDwEnYU | 28 | same | 28 | PT Exercise Glute Bridge Demonstration | Kept |
| Wall Sits | https://www.youtube.com/watch?v=i5mzUfWL96Q | 66 | https://www.youtube.com/watch?v=RG7z0P9qrLk | 10 | Wall Sit | Replaced |
| Bulgarian Split Squats | https://www.youtube.com/watch?v=2C-uNgKwPLE | 175 | https://www.youtube.com/watch?v=92Nxf5BTnrs | 23 | Bodyweight Bulgarian Split Squat - Exercise Demo | Replaced |
| Step-Ups | https://www.youtube.com/watch?v=dQqApCGd5Ss | 183 | https://www.youtube.com/watch?v=M1SQgm5qA78 | 22 | Bodyweight Step-Up | Replaced |
| Reverse Lunges | https://www.youtube.com/watch?v=WGLZEcxnggY | 7 | same | 7 | Bodyweight Reverse Lunge \| Exercise Demo | Kept |
| Stick Landings | https://www.youtube.com/watch?v=AzZLYpEc93E | 35 | https://www.youtube.com/watch?v=FDEjKyiY9h8 | 20 | Vertical Jump (stick landing) - PR Demo | Replaced |
| Approach Jumps | https://www.youtube.com/watch?v=B7vbjJ2wQQQ | 831 | https://www.youtube.com/watch?v=CSIhUzuAVAM | 23 | The Outside Hitter Approach | Replaced |
| Forearm Plank | https://www.youtube.com/watch?v=mwlp75MS6Rg | 14 | same | 14 | How to do a Plank \| Proper Form & Technique \| NASM | Kept |
| Jump Rope | https://www.youtube.com/watch?v=3dwMzERxpRw | 1102 | https://www.youtube.com/watch?v=Zjq9NJDphTM | 27 | Jump Rope - Single Bounce | Replaced |
| Spring Ankle Isometric Holds | https://www.youtube.com/watch?v=arLsa_isSOw | 85 | https://www.youtube.com/watch?v=hT4KHG0e19A | 28 | Isometric Hold Calf Raise \| OS | Replaced |
| Bent-Knee Calf Raises | https://www.youtube.com/watch?v=8Vc4cx7nF4Y | 102 | https://www.youtube.com/watch?v=-KZ0TJydf8M | 22 | Physical Therapy Bent Knee Calf Raises | Replaced |
| Goblet Squat | https://www.youtube.com/watch?v=JO7D6GJ98wY | 673 | https://www.youtube.com/watch?v=zBV3ceGyAxw | 22 | How To Do A Goblet squat | Replaced |
| Single-Leg Stick Landings | https://www.youtube.com/watch?v=ajGvc3RO0WI | 5 | same | 5 | Single Leg Hop and Stick – Landing Control & Plyometric Stability Drill | Kept |
| Single-Leg Pogo Hops | https://www.youtube.com/watch?v=EvlsYy7fE7E | 20 | same | 20 | How to: Single Leg Pogo Hop | Kept |
| Countermovement Jumps | https://www.youtube.com/watch?v=Z3c4QscD1UY | 39 | https://www.youtube.com/watch?v=Lsh83hQtlqw | 20 | Countermovement Jump | Replaced |
| Seated Box Jumps | https://www.youtube.com/watch?v=_74fQyvOV1s | 8 | same | 8 | Seated Box Jump | Kept |
| Broad Jump to Vertical Jump | https://www.youtube.com/watch?v=DbqD_US36uY | 16 | same | 16 | Broad Jump to Vertical Jump | Kept |
| Banded Squat Jumps (id `banded-speed-squats`) | https://www.youtube.com/watch?v=02bkJkp6W2s | 57 | https://www.youtube.com/watch?v=EiN7xOEEY64 | 14 | Banded Squat Jumps | Requested Short. Invidious `lengthSeconds` is 14. Title is "Banded Squat Jumps" by Generational Fitness. YouTube's watch page was still `LOGIN_REQUIRED` with no `lengthSeconds`. The public storyboard is only 48 pixels tall, so the jump itself is not readable there. `oUKgQH7wJFQ` (feet-down squat, 24 seconds) is no longer linked. |
| Kettlebell Swings | https://www.youtube.com/watch?v=v3wnrSluDcw | 977 | https://www.youtube.com/watch?v=1cVT3ee9mgU | 26 | Kettlebell Swing | Replaced |
| Barbell Back Squat | https://www.youtube.com/watch?v=8PMjqgR8Wa8 | 235 | https://www.youtube.com/watch?v=-bJIpOq-LWk | 12 | How to do a Barbell Back Squat | Replaced |
| Trap Bar Deadlift | https://www.youtube.com/watch?v=eIFW8zspJzQ | 944 | https://www.youtube.com/watch?v=FYx76NSijfU | 16 | Trap Bar Deadlift | Replaced |
| Barbell Romanian Deadlift | https://www.youtube.com/watch?v=xgusDooVfKU | 19 | same | 19 | How to do a Romanian Deadlift (Barbell) \| Proper Form & Technique \| NASM | Kept |
| Barbell Hip Thrust | https://www.youtube.com/watch?v=Zp26q4BY5HE | 88 | https://www.youtube.com/watch?v=5S8SApGU_Lk | 16 | Barbell Hip Thrust | Replaced |
| Single-Leg Leg Press | https://www.youtube.com/watch?v=FU7FqGTtCMk | 15 | same | 15 | Single Leg Leg Press \| Proper Form Tutorial for Unilateral Leg Strength | Kept |
| Hang Power Clean | https://www.youtube.com/watch?v=efHjodEVf9w | 82 | https://www.youtube.com/watch?v=5xVcZOPywNI | 14 | Hang Power Clean - OPEX Exercise Library | Replaced |
| Trap Bar Speed Pulls | https://www.youtube.com/watch?v=6UsMx5BoSK0 | 16 | https://www.youtube.com/watch?v=hHniEao5Ul0 | 11 | Trap Bar Speed Pull (Dynamic Effort) | Replaced. The old clip was a trap-bar high pull. |
| Dumbbell Squat Jumps | https://www.youtube.com/watch?v=XOTO2qWRy9U | 65 | https://www.youtube.com/watch?v=wVpp2XH1ELI | 13 | Dumbbell Squat Jump | Replaced |
| Depth Jumps | https://www.youtube.com/watch?v=fL66hVKR89Q | 321 | https://www.youtube.com/watch?v=bMHL5xqKn3E | 21 | How to do a Depth Jump | Replaced |
| Alternating Box Jumps | https://www.youtube.com/watch?v=MNSIKQ7jFsE | 20 | same | 20 | Alternating Box Jump | Kept |
| Single-Leg Hurdle Jumps | https://www.youtube.com/watch?v=qbvNsbWVpiU | 21 | same | 21 | Hurdle Exercise: Single Leg Jumps | Kept |
| 180-Degree Jumps | https://www.youtube.com/watch?v=xTjBP85moMo | 38 | https://www.youtube.com/watch?v=6J-h1N8Sq_w | 27 | 180 Degree Jump | Replaced |
| Back-Leg Elevated Single-Leg Jumps | https://www.youtube.com/watch?v=ehiRILvixIE | 26 | same | 26 | Rear Foot Elevated Split Squat Jump | Kept |
