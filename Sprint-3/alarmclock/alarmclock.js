// -------- Alarm Clock Implementation --------
let countdownInterval = null;
let flashInterval = null;
let timeLeft = 0;
let paused = false;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  const secondsInput = parseInt(input.value, 10);

  if (isNaN(secondsInput) || secondsInput < 0) return;

  // Reset previous timer if any
  if (countdownInterval) clearInterval(countdownInterval);
  stopFlashing();
  paused = false;
  timeLeft = secondsInput;

  updateHeading(timeLeft);

  countdownInterval = setInterval(() => {
    if (!paused) {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        updateHeading(0);
        playAlarm();
        startFlashing();
      } else {
        updateHeading(timeLeft);
      }
    }
  }, 1000);
}

function pauseAlarm() {
  paused = true;
  if (audio) audio.pause();
  stopFlashing();
}

function resumeAlarm() {
  if (timeLeft > 0) paused = false;
}

function stopAlarm() {
  paused = true;
  if (audio) audio.pause();
  stopFlashing();
  clearInterval(countdownInterval);
  countdownInterval = null;
  timeLeft = 0;
  updateHeading(0);
}

function resetAlarm() {
  paused = false;
  clearInterval(countdownInterval);
  countdownInterval = null;
  stopFlashing();
  timeLeft = 0;
  updateHeading(0);
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

// ---------------- Flashing Screen ----------------
function startFlashing() {
  const body = document.body;
  let isBlue = false;
  flashInterval = setInterval(() => {
    body.style.backgroundColor = isBlue ? "white" : "#add8e6"; 
    isBlue = !isBlue;
  }, 500);
}

function stopFlashing() {
  clearInterval(flashInterval);
  flashInterval = null;
  document.body.style.backgroundColor = "white";
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();
  });

  document.getElementById("resume").addEventListener("click", () => {
    resumeAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("reset").addEventListener("click", () => {
    resetAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarmSound() {
  audio.pause();
}

window.onload = setup;
