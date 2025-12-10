// -------- Alarm Clock Implementation --------
let countdownInterval = null;
let timeLeft = 0;
let paused = false;

// -------- Main Functions --------
function setAlarm() {
  const input = document.getElementById("alarmSet");
  const secondsInput = parseInt(input.value, 10);

  // Ignore invalid or zero/negative inputs
  if (isNaN(secondsInput) || secondsInput <= 0) return;

  // Reset previous alarm
  resetAlarm();

  timeLeft = secondsInput;
  updateHeading(timeLeft);

  input.disabled = true;

  countdownInterval = setInterval(() => {
    if (!paused) {
      timeLeft--;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        updateHeading(0);
        playAlarm();
        startFlashing();
        input.disabled = false;
      } else {
        updateHeading(timeLeft);
      }
    }
  }, 1000);
}

function pauseAlarm() {
  paused = true;
  audio.pause();
  stopFlashing();
}

function resumeAlarm() {
  if (timeLeft > 0) paused = false;
}

function stopAlarm() {
  resetAlarm(); // fully stop everything
}

function resetAlarm() {
  // Stop countdown
  paused = false;
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  // Stop flashing background
  stopFlashing();

  // Stop alarm sound if playing
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  // Reset countdown display
  timeLeft = 0;
  updateHeading(0);

  // Clear and re-enable input
  const input = document.getElementById("alarmSet");
  if (input) {
    input.value = "";
    input.disabled = false;
  }
}

// -------- Helper Functions --------
function updateHeading(seconds) {
  const heading = document.getElementById("timeRemaining");
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  heading.innerText = `Time Remaining: ${mins}:${secs}`;
}

// ---------------- Flashing Screen (CSS-based) ----------------
function startFlashing() {
  document.body.classList.add("alarm-flashing");
}

function stopFlashing() {
  document.body.classList.remove("alarm-flashing");
  document.body.style.backgroundColor = "white";
}

// ---------------- Audio ----------------
var audio = new Audio("alarmsound.mp3");

function playAlarm() {
  audio.play();
}

function pauseAlarmSound() {
  audio.pause();
}

// ---------------- Setup Event Listeners ----------------
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("pause").addEventListener("click", pauseAlarm);
  document.getElementById("resume").addEventListener("click", resumeAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);
  document.getElementById("reset").addEventListener("click", resetAlarm);
}

window.onload = setup;


// alarmclock.js modified 