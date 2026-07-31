let timerInterval = null;

function setAlarm() {
  const inputEl = document.getElementById("alarmSet");
  const timeRemainingEl = document.getElementById("timeRemaining");

  let totalSeconds = parseInt(inputEl.value, 10);

  // If input is invalid or empty, default to 0
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    return;
  }
  // Clear any existing timer if the button is clicked again
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  // Function to render the formatted time (MM:SS) to the DOM
  function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    timeRemainingEl.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
  }
  // 1. Immediately set heading on button click
  updateDisplay();

  // 2. Start the countdown timer
  timerInterval = setInterval(() => {
    totalSeconds -= 1;

    if (totalSeconds >= 0) {
      updateDisplay();
    }

    if (totalSeconds === 0) {
      playAlarm();
      clearInterval(timerInterval);
    }
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
