let timeRemaining = 0;
let timerId = null;
let isPaused = false;

const audio = new Audio("alarmsound.mp3");

// FORMAT mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// UPDATE DISPLAY
function updateDisplay(time) {
  const heading = document.getElementById("timeRemaining");
  heading.textContent = formatTime(Math.max(0, time));
}

// PLAY ALARM
function playAlarm() {
  audio.loop = true;
  audio.currentTime = 0;
  audio.play();
}

// TRIGGER ALARM
function triggerAlarm() {
  document.body.classList.toggle("alarm-activated", true);
  playAlarm();
}

// STOP / PAUSE / RESUME
function stopAlarm() {
  // 1. If timer is running → pause
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
    isPaused = true;
    return;
  }

  // 2. If paused → resume
  if (isPaused && timeRemaining > 0) {
    startTimer();
    isPaused = false;
    return;
  }

  // 3. If alarm is playing → stop it
  if (timeRemaining <= 0) {
    audio.pause();
    audio.currentTime = 0;
    audio.loop = false;

    document.body.classList.toggle("alarm-activated", false);
  }
}

// START TIMER
function startTimer() {
  clearInterval(timerId);

  timerId = setInterval(() => {
    timeRemaining = timeRemaining - 1;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      isPaused = false;
      triggerAlarm();
    }
  }, 1000);
}

// SET ALARM
function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  timeRemaining = parseInt(input, 10);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    return;
  }

  // reset alarm state
  audio.pause();
  audio.currentTime = 0;
  audio.loop = false;
  document.body.classList.toggle("alarm-activated", false);

  updateDisplay(timeRemaining);
  isPaused = false;
  startTimer();
}

// SETUP
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);

  updateDisplay(0);
}

window.onload = setup;
