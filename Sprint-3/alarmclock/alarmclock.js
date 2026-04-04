let timeRemaining = 0;
let timerId = null;

// Format seconds → mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Update the UI
function updateDisplay() {
  const display = document.getElementById("timeRemaining");
  display.textContent = "Time Remaining: " + formatTime(timeRemaining);
}

// Start countdown
function startTimer() {
  // Prevent multiple timers
  clearInterval(timerId);

  timerId = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateDisplay();
    } else {
      clearInterval(timerId);
      triggerAlarm();
    }
  }, 1000);
}

// When time reaches 0
function triggerAlarm() {
  audio.loop = true;
  playAlarm();

  document.body.style.backgroundColor = "red";
}

// MAIN FUNCTION (called when clicking "Set Alarm")
function setAlarm() {
  const input = document.getElementById("alarmSet").value;

  timeRemaining = Number(input);

  updateDisplay();

  if (timeRemaining > 0) {
    startTimer();
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    document.body.style.backgroundColor = ""; // reset background
  });

  // Show 00:00 on load
  updateDisplay();
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
}

window.onload = setup;
