// Variables to track state
let timeRemaining = 0;
let alarmInterval = null;

// DOM Elements (will be fetched dynamically in functions to avoid load issues)

/**
 * Formats a number of seconds into "MM:SS" format.
 * @param totalSeconds - The total number of seconds.
 * @return A string formatted as "MM:SS".
 */
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Pad with leading zeros
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return "Time Remaining: " + formattedMinutes + ":" + formattedSeconds;
}

/**
 * Updates the display and handles the alarm trigger logic.
 * Called every second by the interval.
 */
function updateTime() {
  // Update display
  const title = document.getElementById("timeRemaining");
  title.innerText = formatTime(timeRemaining);

  // Check if alarm should trigger
  if (timeRemaining === 0) {
    playAlarm();

    // Change background color to flash
    document.body.classList.add("flash");
  } else {
    // Decrement time
    timeRemaining = timeRemaining - 1;
  }
}

/**
 * Sets the alarm based on user input.
 * Called when the "Set Alarm" button is clicked.
 */
function setAlarm() {
  // Clear any existing interval
  if (alarmInterval) {
    clearInterval(alarmInterval);
    document.body.classList.remove("flash");
  }

  const input = document.getElementById("alarmSet");
  const inputValue = parseInt(input.value);

  // Validate input
  if (isNaN(inputValue) || inputValue < 0) {
    return;
  }

  timeRemaining = inputValue;

  // Update display immediately
  const title = document.getElementById("timeRemaining");
  title.innerText = formatTime(timeRemaining);

  // Start countdown interval
  alarmInterval = setInterval(function () {
    updateTime();
  }, 1000);
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

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
