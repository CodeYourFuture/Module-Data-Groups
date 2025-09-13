// Refactor the Alarm Clock code with advanced features

let timerId = null;
let remainingSeconds = 0;
let alarmFlashing = false;

// Update the display
function updateDisplay() {
  let minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  let seconds = String(remainingSeconds % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${minutes}:${seconds}`;
}

// Start flashing background
function startFlashing() {
  if (!alarmFlashing) {
    document.body.classList.add("flash");
    alarmFlashing = true;
  }
}

// Stop flashing background
function stopFlashing() {
  if (alarmFlashing) {
    document.body.classList.remove("flash");
    document.body.style.backgroundColor = "white";
    alarmFlashing = false;
  }
}

// Shared countdown logic
function startCountdown() {
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    // Update the display each second
    updateDisplay();

    if (remainingSeconds <= 0) {
      // Time's up
      remainingSeconds = 0;
      clearInterval(timerId);
      timerId = null;
      playAlarm();    // plays sound only
      startFlashing(); // flash background
    }
  }, 1000);
}

// Set a new alarm
function setAlarm() {
  const input = document.getElementById("alarmSet");
  const time = parseInt(input.value, 10);

  if (isNaN(time) || time <= 0) return;

  clearInterval(timerId);
  timerId = null;
  remainingSeconds = time;
  input.value = "";

  stopFlashing();  // reset background if previous alarm was active
  updateDisplay();
  startCountdown();
}

// Pause countdown
function pauseCountdown() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  stopFlashing(); // stop flashing if paused
}

// Resume countdown
function resumeCountdown() {
  if (timerId === null && remainingSeconds > 0) {
    startCountdown();
  }
}

// --- Event listeners for Pause and Resume moved outside DO NOT EDIT ---
window.addEventListener("DOMContentLoaded", () => {
  const pauseBtn = document.getElementById("pause");
  const resumeBtn = document.getElementById("resume");
   const stopBtn = document.getElementById("stop");

  if (pauseBtn) pauseBtn.addEventListener("click", pauseCountdown);
  if (resumeBtn) resumeBtn.addEventListener("click", resumeCountdown);
  if (stopBtn) stopBtn.addEventListener("click", stopFlashing); // reset background
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
