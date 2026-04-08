
let timerId = null;

const audio = new Audio("alarmsound.mp3");

// FORMAT mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// UPDATE DISPLAY (MUST MATCH TEST EXACTLY)
function updateDisplay(timeRemaining) {
  const heading = document.getElementById("timeRemaining");
  heading.textContent = "Time Remaining: " + formatTime(timeRemaining);
}

// REQUIRED BY TESTS
function playAlarm() {
  audio.loop = true;
  audio.currentTime = 0;
  audio.play();
}

// STOP ALARM
function stopAlarm() {
  audio.pause();
  audio.currentTime = 0;
  audio.loop = false;

  clearInterval(timerId);
  timerId = null;

  document.body.style.backgroundColor = "";
}

// TRIGGER ALARM
function triggerAlarm() {
  document.body.style.backgroundColor = "red";
  playAlarm();
}

// START TIMER
function startTimer(timeRemaining) {
  clearInterval(timerId);

  timerId = setInterval(() => {
    timeRemaining--;

    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerId);
      timerId = null;

      timeRemaining = 0;
      updateDisplay();

      triggerAlarm();
    }
  }, 1000);
}

// SET ALARM
function setAlarm() {
  const input = document.getElementById("alarmSet").value;

  // ensure clean number input
let  timeRemaining = parseInt(input, 10);

  if (isNaN(timeRemaining) || timeRemaining < 0) {
    timeRemaining = 0;
  }

  updateDisplay();

  if (timeRemaining > 0) {
    startTimer(timeRemaining);
  }
}

// SETUP 
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);

  timeRemaining = 0;
  updateDisplay();
}

window.onload = setup;
