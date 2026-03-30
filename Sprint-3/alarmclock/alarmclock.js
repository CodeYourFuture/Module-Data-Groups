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
 * Updates the page background depending on whether the alarm has finished.
 * If true is passed in, the alarm-finished class is added.
 * If false is passed in, the alarm-finished class is removed.
 */
function setAlarmFinishedState(isFinished) {
  document.body.classList.toggle("alarm-finished", isFinished);
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
 * Resets all application state before starting a new alarm.
 * This clears any existing timer, stops any playing sound,
 * and restores the default background state.
 */
function resetAll() {
  stopCountdown();
  pauseAlarm();
  setAlarmFinishedState(false);
}

/**
 * Handles what should happen when the timer reaches zero.
 */
function finishAlarm() {
  stopCountdown();
  setAlarmFinishedState(true);
  playAlarm();
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
      finishAlarm();
    }
  }, 1000);
}

/**
 * Reads the value from the input, updates the heading,
 * resets application state, and starts the countdown.
 */
function setAlarm() {
  const input = document.getElementById("alarmSet");
  const inputValue = Number(input.value);

  // Reset application state as soon as the button is clicked
  resetAll();

  // Prevent invalid negative or empty values
  if (Number.isNaN(inputValue) || inputValue < 0) {
    return;
  }

  // Store the new number of seconds and update the heading immediately
  remainingSeconds = Math.floor(inputValue);
  updateHeading();

  // If the user sets the alarm to 0, finish immediately
  if (remainingSeconds === 0) {
    finishAlarm();
    return;
  }

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
