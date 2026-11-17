let countdownInterval = null;

function setAlarm() {
  const inputEl = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let totalSeconds = parseInt(inputEl.value, 10);

  if (isNaN(totalSeconds) || totalSeconds < 0) return;

  // Clear any existing timer so they don't overlap
  if (countdownInterval) {
    clearInterval(countdownInterval);
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
