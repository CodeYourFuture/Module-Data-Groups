let intervalId = null;
let totalSeconds = 0;
const input = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
const message = document.getElementById("message");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
function updateDisplay() {
  timeRemaining.textContent = `Time Remaining: ${formatTime(totalSeconds)}`;
}

function resetAlarm() {
  clearInterval(intervalId);
  intervalId = null;
  audio.pause();
  audio.currentTime = 0;
}
function getTime() {
  const time = Number(input.value);
  if (!(Number.isInteger(time) && time >= 1)) {
    message.textContent = "Enter a valid number";
    return null;
  }
  return time;
}

function setAlarm() {
  const time = getTime();
  if (time === null) {
    return;
  }

  resetAlarm();
  totalSeconds = time;
  updateDisplay();

  intervalId = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      playAlarm();
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
