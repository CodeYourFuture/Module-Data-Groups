var audio = new Audio("alarmsound.mp3");

let timeRemaining = 0;
let countdownInterval = null;
let hasPlayed = false;

function setAlarm() {
  const input = document.getElementById("alarmSet").value;

  timeRemaining = parseInt(input, 10);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }

  hasPlayed = false;
  updateDisplay();

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    timeRemaining--;

    // Play alarm at 10 seconds remaining (or immediately if less than 10)
    if (!hasPlayed && (timeRemaining === 10 || timeRemaining < 10)) {
      playAlarm();
      hasPlayed = true;
    }

    if (timeRemaining <= 0) {
      timeRemaining = 0;
      updateDisplay();
      clearInterval(countdownInterval);
      return;
    }

    updateDisplay();
  }, 1000);
} // ✅ properly closed function

function updateDisplay() {
  const display = document.getElementById("timeRemaining");

  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const seconds = String(timeRemaining % 60).padStart(2, "0");

  display.textContent = `Time Remaining: ${minutes}:${seconds}`;
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
}

window.onload = setup;