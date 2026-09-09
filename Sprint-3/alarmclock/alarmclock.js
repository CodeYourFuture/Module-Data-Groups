let timer = null;
let secondsRemaining = 0;

const timeRemainingEl = document.getElementById("timeRemaining");
const alarmSetEl = document.getElementById("alarmSet");
const stopButtonEl = document.getElementById("stop");

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateDisplay(seconds) {
  timeRemainingEl.textContent = `Time Remaining: ${formatTime(seconds)}`;
}

function setAlarm() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  const inputValue = alarmSetEl.value;
  const seconds = Number(inputValue);

  if (
    inputValue === "" ||
    Number.isNaN(seconds) ||
    !Number.isInteger(seconds) ||
    seconds <= 0
  ) {
    timeRemainingEl.textContent = "Please enter a whole number greater than 0.";
    return;
  }

  secondsRemaining = seconds;
  updateDisplay(secondsRemaining);

  timer = setInterval(() => {
    secondsRemaining--;
    updateDisplay(secondsRemaining);

    if (secondsRemaining <= 0) {
      clearInterval(timer);
      timer = null;
      playAlarm();
    }
  }, 1000);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

stopButtonEl.addEventListener("click", stopTimer);

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