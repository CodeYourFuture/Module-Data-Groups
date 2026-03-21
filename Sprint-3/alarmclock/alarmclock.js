// Store the current countdown value in seconds
let remainingSeconds = 0;

// Store the timer ID so an existing timer can be cleared
let countdownTimerId = null;

/**
 * Converts a number of seconds into mm:ss format.
 * Example:
 * 19 -> 00:19
 * 119 -> 01:59
 */
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Updates the heading text with the current remaining time.
 */
function updateHeading() {
  const heading = document.getElementById("timeRemaining");
  heading.innerText = `Time Remaining: ${formatTime(remainingSeconds)}`;
}

/**
 * Resets the background colour to the default state.
 */
function resetBackground() {
  document.body.classList.remove("alarm-finished");
}

/**
 * Changes the background colour when the timer reaches zero.
 */
function showAlarmFinishedState() {
  document.body.classList.add("alarm-finished");
}

/**
 * Stops any existing countdown timer.
 */
function stopCountdown() {
  if (countdownTimerId !== null) {
    clearInterval(countdownTimerId);
    countdownTimerId = null;
  }
}

/**
 * Starts the countdown timer and updates the heading every second.
 */
function startCountdown() {
  countdownTimerId = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds -= 1;
      updateHeading();
    }

    if (remainingSeconds === 0) {
      stopCountdown();
      showAlarmFinishedState();
      playAlarm();
    }
  }, 1000);
}

/**
 * Reads the value from the input, updates the heading,
 * resets the background, stops any existing alarm sound,
 * and starts the countdown.
 */
function setAlarm() {
  const input = document.getElementById("alarmSet");
  const inputValue = Number(input.value);

  // Prevent invalid negative values
  if (Number.isNaN(inputValue) || inputValue < 0) {
    return;
  }

  // Stop any previous countdown before starting a new one
  stopCountdown();

  // Stop any alarm sound that may already be playing
  pauseAlarm();

  // Reset the page state for a new alarm
  resetBackground();

  // Store the new number of seconds and update the heading immediately
  remainingSeconds = Math.floor(inputValue);
  updateHeading();

  // Start counting down every second
  startCountdown();
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  // Make the alarm loop continuously until stopped
  audio.loop = true;

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

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
