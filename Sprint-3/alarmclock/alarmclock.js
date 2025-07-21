let countdownInterval = null;
let remainingTime = 0;
let isPaused = false;

const timeDisplay = document.getElementById("timeRemaining");
const timeInput = document.getElementById("alarmSet");
const alarmAudio = new Audio("alarmsound.mp3");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function setAlarm() {
  document.body.style.backgroundColor = "";

  const inputSeconds = parseInt(timeInput.value, 10);

  if (isNaN(inputSeconds) || inputSeconds < 0) {
    timeDisplay.textContent = "Invalid time!";
    return;
  }

  clearInterval(countdownInterval);

  remainingTime = inputSeconds;
  isPaused = false;
  updateDisplay();

  countdownInterval = setInterval(tick, 1000);
}

function tick() {
  if (isPaused) return;

  remainingTime--;

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    timeDisplay.textContent = "Time Remaining: 00:00";
    playAlarm();
    flashBackground();
  } else {
    updateDisplay();
  }
}

function updateDisplay() {
  timeDisplay.textContent = `Time Remaining: ${formatTime(remainingTime)}`;
}

function playAlarm() {
  alarmAudio.play();
}

function pauseAlarmSound() {
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
}

function togglePause() {
  if (!countdownInterval) {
    timeDisplay.textContent = "No active alarm to pause/resume.";
    return;
  }

  isPaused = !isPaused;
  document.getElementById("pause").textContent = isPaused ? "Resume" : "Pause";

  if (!isPaused) {
    updateDisplay();
  }
}

function flashBackground() {
  let flash = true;
  let flashInterval = setInterval(() => {
    document.body.style.backgroundColor = flash ? "red" : "";
    flash = !flash;
  }, 500);

  setTimeout(() => {
    clearInterval(flashInterval);
    document.body.style.backgroundColor = "";
  }, 5000);
}

window.onload = function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarmSound);
  document.getElementById("pause").addEventListener("click", togglePause);
};