let countdownInterval = null;
let secondsLeft = 0;

function setAlarm() {
  // Read the minutes from the input
  const input = document.getElementById("alarmSet");
  const minutes = parseInt(input.value, 10);
  // If nothing useful was entered, do nothing
  if (isNaN(minutes) || minutes <= 0) {
    return;
  }
  // Convert to total seconds
  secondsLeft = minutes * 60;
  // Stop any existing countdown
  if (countdownInterval !== null) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  // Show starting time right away
  updateTimeDisplay();

  // Start the countdown
  countdownInterval = setInterval(() => {
    secondsLeft = secondsLeft - 1;

    updateTimeDisplay();

    if (secondsLeft <= 0) {
      // Time's up
      clearInterval(countdownInterval);
      countdownInterval = null;
      secondsLeft = 0;
      // Makes sure to show exactly 00:00
      updateTimeDisplay();
      playAlarm();
    }
  }, 1000);
}

// Helper function
function updateTimeDisplay() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const displayMin = minutes.toString().padStart(2, "0");
  const displaySec = seconds.toString().padStart(2, "0");

  const heading = document.getElementById("timeRemaining");
  heading.textContent = `Time Remaining: ${displayMin}:${displaySec}`;
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
