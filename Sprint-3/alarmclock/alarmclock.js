/*
function setAlarm() {}

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
*/


let countdownInterval = null;
let flashInterval = null;
let timeRemainingElement = null;

let timeRemaining = 0;
let isPaused = false;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const padMinutes = String(minutes).padStart(2, "0");
  const padSeconds = String(seconds).padStart(2, "0");

  return `${padMinutes}:${padSeconds}`;
}

function updateDisplay(ptimeRemaining) {
  if (timeRemainingElement) {
    timeRemainingElement.innerText = `Time Remaining: ${formatTime(ptimeRemaining)}`;
  }
}

function startFlashingBackground() {
  let isRed = false;
  flashInterval = setInterval(() => {
    document.body.style.backgroundColor = isRed ? "#ffffff" : "#ff4d4d";
    isRed = !isRed;
  }, 500);
}

function stopFlashingBackground() {
  if (flashInterval) {
    clearInterval(flashInterval);
    flashInterval = null;
  }
  document.body.style.backgroundColor = "";
}

function setAlarm() {
  const alarmInput = document.getElementById("alarmSet");

  // If currently paused, resume countdown
  if (isPaused) {
    isPaused = false;
    startCountdown();
    return;
  }

  // If an active alarm is already running, toggle pause state
  if (countdownInterval !== null) {
    isPaused = true;
    clearInterval(countdownInterval);
    countdownInterval = null;
    return;
  }

  // Read time from input field
  const inputSeconds = parseInt(alarmInput.value, 10);
  if (isNaN(inputSeconds) || inputSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  timeRemaining = inputSeconds;
  stopFlashingBackground();
  updateDisplay(timeRemaining);
  startCountdown();
}

function startCountdown() {
  // Clear any existing timer before starting a new one
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    timeRemaining -= 1;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      playAlarm();
      startFlashingBackground();
    }
  }, 1000);
}

// Override pauseAlarm to also clear screen effects and reset timers
const originalPauseAlarm = pauseAlarm;
pauseAlarm = function () {
  if (typeof originalPauseAlarm === "function") {
    originalPauseAlarm();
  } else {
    audio.pause();
  }

  // Reset state
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  isPaused = false;
  stopFlashingBackground();
};

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {

  timeRemainingElement = document.getElementById("timeRemaining");
  
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
