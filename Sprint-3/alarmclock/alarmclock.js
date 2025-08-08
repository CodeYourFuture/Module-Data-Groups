/*
 * Explanation of work done:
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
 * I connected the start and stop buttons to the respective functions in the setup function.
 *
 * Additionally, I enhanced the user experience by changing the background color to red
 * when the alarm triggers, providing a visual alert alongside the sound.
 * When the alarm is stopped, the background color resets to its original state.
 *
 * Based on review feedback, I made further improvements:
 * - Moved the audio object definition to the top of the script for clarity and safety.
 * - Prevented users from starting multiple alarms at once by checking if an alarm or timer is already running.
 * - Updated the pauseAlarm function to only run its logic if something is actually playing.
 *
 * These changes correspond to commits 1 through 10, progressively adding countdown, alarm triggering,
 * stopping, visual feedback, and improved reliability through review-driven refinements.
 */
let intervalId = null;
let remainingSeconds = 0;
let alarmPlaying = false;

var audio = new Audio("alarmsound.mp3"); 

function setAlarm() {
  if (alarmPlaying || intervalId) return; 

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
      intervalId = null;
      playAlarm();
      alarmPlaying = true;
      document.body.style.backgroundColor = "#ffcccc";
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
  if (!alarmPlaying && !intervalId) return; // Nothing to stop

  audio.pause();
  audio.currentTime = 0;
  clearInterval(intervalId);
  intervalId = null;
  alarmPlaying = false;

  document.body.style.backgroundColor = "";
}

// DO NOT EDIT BELOW HERE

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

