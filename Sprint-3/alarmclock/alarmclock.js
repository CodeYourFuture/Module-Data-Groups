// Alarm Clock JavaScript Code
// This code manages a simple alarm clock that counts down from a user-defined number of seconds.
// It allows the user to set an alarm, pause/resume the countdown, and stop the alarm sound.
let countdown = 0;
let timerId = null;
let isPaused = false;

const inputElement = document.getElementById("alarmSet");
const displayElement = document.getElementById("timeRemaining");
// Ensure the input and display elements exist
function setAlarm() {
  let inputValue = inputElement.value;
  let seconds = Number(inputValue);

  // Validate input
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds!");
    return;
  }

  // Reset the countdown and pause state
  countdown = seconds;
  isPaused = false;

  // Clear any existing timer
  if (timerId !== null) {
    // If a timer is already running, clear it
    clearInterval(timerId); // Stop the previous timer
  }
  // Start a new timer
  updateDisplay();
  timerId = setInterval(tick, 1000);
  updatePauseButton("Pause");
}
// Ensure the setAlarm function is called when the user clicks the "Set Alarm" button
function updateDisplay() {
  let minutes = Math.floor(countdown / 60);
  let seconds = countdown % 60;

  // Format minutes and seconds to always show two digits
  let minutesStr = minutes.toString().padStart(2, "0");
  let secondsStr = seconds.toString().padStart(2, "0");

  // Update the display element with the formatted time
  displayElement.textContent = `Time Remaining: ${minutesStr}:${secondsStr}`;
}

// Function to handle the countdown logic
function tick() {
  if (isPaused) return; // If paused, do nothing

  if (countdown === 0) {
    // If countdown reaches zero, stop the timer and play the alarm
    clearInterval(timerId);
    timerId = null;
    playAlarm();
    return;
  }
  countdown--; // Decrement the countdown
  updateDisplay(); // Update the display with the new time remaining
}

function togglePause() {
  // Function to toggle pause/resume state of the timer
  const pauseButton = document.getElementById("pause"); //

  if (timerId === null && countdown > 0) {
    // If timer is stopped but there is time left, resume countdown
    // Timer is stopped but time remains, so resume countdown
    isPaused = false;
    timerId = setInterval(tick, 1000);
    pauseButton.textContent = "Pause";
    return;
  }

  if (timerId === null) {
    // Timer stopped and no time left — nothing to do
    return;
  }

  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
}

document.getElementById("stop").addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  isPaused = true; // Keep it paused so pressing Resume works correctly
  updatePauseButton("Resume");
  document.body.classList.remove("flash");
});

function updatePauseButton(text) {
  const pauseButton = document.getElementById("pause");
  if (pauseButton) pauseButton.textContent = text;
}

window.addEventListener("DOMContentLoaded", () => {
  const pauseButton = document.getElementById("pause");
  if (pauseButton) {
    pauseButton.addEventListener("click", togglePause);
  }

  const stopButton = document.getElementById("stop");
  if (stopButton) {
    stopButton.addEventListener("click", () => {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      document.body.classList.remove("flash");
    });
  }
});

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
  document.body.classList.add("flash");
}

function pauseAlarm() {
  audio.pause();
  document.body.classList.remove("flash");
}

window.onload = setup;
