# Make an Alarm Clock

In this folder you will find the basic setup of an alarm clock.

First off, once you've branched off `main`, then update the title element in `index.html` to "Alarm clock app"
You will need to write your implementation in `alarmclock.js`.

## How the clock should work

When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

Every one second the title should count down by one.

When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

You can stop the alarm sound by pressing the `Stop Alarm` button.

## Need Help?

Only read this section if you really need to! It's good to work this out for yourself.

### Hints

- Have you tried looking at the `setInterval` function?

## Extra Tasks

If you have time and want to do more why not try

- Make the background change color when the alarm clock finishes
  - Try making the background flash!
- Could you add `pause` functionality so that the count down stops and then you restart it later??
