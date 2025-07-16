let countdown = 0;
let timerId = null;
let isPaused = false;

const inputElement = document.getElementById("alarmSet");
const displayElement = document.getElementById("timeRemaining");
function setAlarm() {
  let inputValue = inputElement.value;
  let seconds = Number(inputValue);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds!");
    return;
  }

  countdown = seconds;
  isPaused = false;

  if (timerId !== null) {
    clearInterval(timerId);
  }
  updateDisplay();
  timerId = setInterval(tick, 1000);
  updatePauseButton("Pause");
}

function updateDisplay() {
  let minutes = Math.floor(countdown / 60);
  let seconds = countdown % 60;

  let minutesStr = minutes.toString().padStart(2, "0");
  let secondsStr = seconds.toString().padStart(2, "0");

  displayElement.textContent = `Time Remaining: ${minutesStr}:${secondsStr}`;
}

function tick() {
  if (isPaused) return;

  if (countdown === 0) {
    clearInterval(timerId);
    timerId = null;
    playAlarm();
    document.body.classList.add("flash");
    return;
  }
  countdown--;
  updateDisplay();
}

function togglePause() {
  const pauseButton = document.getElementById("pause");

  if (timerId === null && countdown > 0) {
    isPaused = false;
    timerId = setInterval(tick, 1000);
    pauseButton.textContent = "Pause";
    return;
  }

  if (timerId === null) {
    return;
  }

  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
}

document.getElementById("stop").addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  isPaused = true;
  updatePauseButton("Resume");
  document.body.classList.remove("flash");
});

function updatePauseButton(text) {
  const pauseButton = document.getElementById("pause");
  if (pauseButton) pauseButton.textContent = text;
}

window.addEventListener("DOMContentLoaded", () => {
  const pauseButton = document.getElementById("pause");
  if (pauseButton) {
    pauseButton.addEventListener("click", togglePause);
  }

  const stopButton = document.getElementById("stop");
  if (stopButton) {
    stopButton.addEventListener("click", () => {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      document.body.classList.remove("flash");
    });
  }
});

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
