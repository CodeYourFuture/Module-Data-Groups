let timer;
let timeLeft = 0;
let paused = false;
const timeDisplay = document.getElementById("timeRemaining");
const pauseBtn = document.getElementById("pauseAndResume");
const setBtn = document.getElementById("set");
const stopBtn = document.getElementById("stop");
const inputField = document.getElementById("alarmSet");
const audio = new Audio("alarmsound.mp3");

// update alarm
function updateDisplay() {
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  timeDisplay.textContent = `Time Remaining: ${mm}:${ss}`;
}

// stop or start flashing
let flashingInterval;
const flashingColors = ["#FF4136", "#2ECC40", "#0074D9", "#FFDC00"];
function startFlashingBackground() {
  let colorIndex = 0;
  flashingInterval = setInterval(() => {
    document.body.style.backgroundColor = flashingColors[colorIndex];
    colorIndex = (colorIndex + 1) % flashingColors.length;
  }, 200);
}
function stopFlashingBackground() {
  clearInterval(flashingInterval);
  document.body.style.backgroundColor = "";
}

// start countDown
function startCountdown() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (--timeLeft <= 0) {
      clearInterval(timer);
      startFlashingBackground();
      playAlarm();
      pauseBtn.style.display = "none";
      updateDisplay();
    } else {
      updateDisplay();
    }
  }, 1000);
}

// set up alarm
function setAlarm() {
  const val = parseInt(inputField.value);
  if (!val || val <= 0) return;

  timeLeft = val;
  updateDisplay();
  startCountdown();

  setBtn.style.display = "none";
  pauseBtn.style.display = "inline";
  inputField.style.display = "none";
}

function playAlarm() {
  audio.currentTime = 0;
  audio.play();
}
// pause or resume alarm
function pauseResumeHandler() {
  if (!paused) {
    clearInterval(timer);
    pauseBtn.textContent = "Resume";
  } else {
    startCountdown();
    pauseBtn.textContent = "Pause";
  }
  paused = !paused;
}

// stop alarm
function stopAlarm() {
  clearInterval(timer);
  audio.pause();
  audio.currentTime = 0;
  stopFlashingBackground();
  timeLeft = 0;
  updateDisplay();

  setBtn.style.display = "inline";
  pauseBtn.style.display = "none";
  inputField.style.display = "inline";
  pauseBtn.textContent = "Pause";
  paused = false;
}

function setup() {
  setBtn.addEventListener("click", setAlarm);
  pauseBtn.addEventListener("click", pauseResumeHandler);
  stopBtn.addEventListener("click", stopAlarm);
}

window.onload = setup;
