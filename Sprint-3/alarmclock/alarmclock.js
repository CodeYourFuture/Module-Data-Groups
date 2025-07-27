/*
 * Explanation of work done so far:
 * 
 * I started by implementing the basic functionality to read the user’s input in seconds,
 * then formatted it into a mm:ss display. I made sure to handle invalid or negative inputs gracefully.
 *
 * Next, I added a countdown timer using setInterval that decreases the remaining time every second.
 * The display updates accordingly with each tick.
 *
 * When the countdown reaches zero, I trigger the alarm sound to play continuously.
 * To allow stopping the alarm, I created a pauseAlarm function that stops the sound,
 * clears the countdown interval, and resets the alarm state.
 *
 * I also connected the start and stop buttons to the respective functions in the setup function.
 *
 * These changes correspond to commits 1 through 5, where I progressively built
 * the countdown, alarm playing, and stopping features.
 */

let intervalId;
let remainingSeconds = 0;
let alarmPlaying = false;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  remainingSeconds = parseInt(input.value, 10);

  if (isNaN(remainingSeconds) || remainingSeconds < 0) return;

  updateDisplay();
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      playAlarm(); 
      alarmPlaying = true;
    }
  }, 1000);
}

function updateDisplay() {
  const display = document.getElementById("timeRemaining");
  const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
  const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
  display.innerText = `Time Remaining: ${minutes}:${seconds}`;
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
  clearInterval(intervalId);
  alarmPlaying = false;
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}


window.onload = setup;
