let timerInterval = null;

function setAlarm() {
  const inputEl = document.getElementById("alarmSet");
  const timeRemainingEl = document.getElementById("timeRemaining");

  let totalSeconds = parseInt(inputEl.value, 10);

  // If input is invalid or empty, default to 0
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    totalSeconds = 0;
  }
  // Clear any existing timer if the button is clicked again
  if (timerInterval) {
    clearInterval(timerInterval);
  }
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
