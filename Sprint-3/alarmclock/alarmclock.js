let timeRemaining = 0;
let timerId = null;

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
  heading.textContent = "Time Remaining: " + formatTime(time);
}

// REQUIRED BY TESTS
function playAlarm() {
  audio.loop = true;
  audio.currentTime = 0;
  audio.play();
}

// STOP / RESET ALARM STATE
function stopAlarm() {
  audio.pause();
  audio.currentTime = 0;
  audio.loop = false;

  clearInterval(timerId);
  timerId = null;

  document.body.classList.toggle("alarm-activated", false);
}

// TRIGGER ALARM
function triggerAlarm() {
  document.body.classList.toggle("alarm-activated", true);
  playAlarm();
}

// START TIMER
function startTimer() {
  stopAlarm();

  timerId = setInterval(() => {
    timeRemaining--;

    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerId);
      timerId = null;

      timeRemaining = 0;
      updateDisplay(timeRemaining);

      triggerAlarm();
    }
  }, 1000);
}

// SET ALARM
function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  timeRemaining = parseInt(input, 10);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    stopAlarm();
    timeRemaining = 0;
    updateDisplay(timeRemaining);
    return;
  }

  updateDisplay(timeRemaining);
  startTimer();
}

// SETUP
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);

  updateDisplay(0);
}

window.onload = setup;
