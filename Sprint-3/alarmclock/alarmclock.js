let countdownInterval = null;
let secondsLeft = 0;
const heading = document.getElementById("timeRemaining");

// Move audio to outer scope so stopAndResetAlarm can reach it
var audio = new Audio("alarmsound.mp3");

function stopAndResetAlarm() {
  audio.pause();
  audio.currentTime = 0;
}

function setAlarm() {
  // Stop any currently ringing alarm before starting a new one
  stopAndResetAlarm();
  stopFlashing(); // reset background too

  const input = document.getElementById("alarmSet");
  const seconds = parseInt(input.value, 10);
  if (isNaN(seconds) || seconds <= 0) {
    return;
  }

  secondsLeft = seconds;

  if (countdownInterval !== null) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  updateTimeDisplay();

  countdownInterval = setInterval(() => {
    secondsLeft = secondsLeft - 1;
    updateTimeDisplay();
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      secondsLeft = 0;
      updateTimeDisplay();
      playAlarm();
      startFlashing(); // flash when alarm fires
    }
  }, 1000);
}

function updateTimeDisplay() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const displayMin = minutes.toString().padStart(2, "0");
  const displaySec = seconds.toString().padStart(2, "0");
  heading.textContent = `Time Remaining: ${displayMin}:${displaySec}`;
}

function startFlashing() {
  document.body.classList.add("flashing");
}

function stopFlashing() {
  document.body.classList.remove("flashing");
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

function pauseAlarm() {
  audio.pause();
  stopFlashing(); // reset background

  // Also pause the countdown
  if (countdownInterval !== null) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}

window.onload = setup;
