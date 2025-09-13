// alarmclock.js

let timerId = null;         // stores the setInterval id so we can clear it
let remainingSeconds = 0;   // seconds left in the countdown

function setAlarm() {
  // Read input value (lowercase .value) and parse to integer seconds
  const raw = document.getElementById("alarmSet").value;
  const secs = parseInt(raw, 10);
  document.getElementById("alarmSet").value = "";
 

  // Validate input
  if (Number.isNaN(secs) || secs <= 0) {
    // show 00:00 for invalid input and do nothing
    remainingSeconds = 0;
    updateDisplay();
    return;
  }

  // Set remaining seconds and clear any existing timer
  remainingSeconds = Math.floor(secs);
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }

  // Update display immediately
  updateDisplay();

  // Start the countdown
  timerId = setInterval(() => {
    remainingSeconds -= 1;

    // Update display on every tick
    updateDisplay();

    if (remainingSeconds <= 0) {
      // Ensure display shows 00:00, stop timer and play alarm
      remainingSeconds = 0;
      clearInterval(timerId);
      timerId = null;
      playAlarm();
    }
  }, 1000);
}

// Helper to format and write the time as MM:SS
function updateDisplay() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  const el = document.getElementById("timeRemaining");
  if (el) {
    el.textContent = `Time Remaining: ${minutes}:${seconds}`;
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
  });
}

function playAlarm() {
  audio.play();
  document.body.classList.add("flash");
}

function pauseAlarm() {
  audio.pause();
  document.body.classList.remove("flash");
}

window.onload = setup;
