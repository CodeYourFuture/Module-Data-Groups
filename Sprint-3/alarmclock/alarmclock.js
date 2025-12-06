

// function setAlarm() {}

let timeLeft = 0;
let timer = null;
let flashing = null;

// DOM references
window.addEventListener("DOMContentLoaded", () => {
// const display = document.getElementById("timeRemaining");
const setButton = document.getElementById("set");
const stopButton = document.getElementById("stop");

// Event listeners
// if (setButton) setButton.addEventListener("click", () => playAlarm());
if (stopButton) stopButton.addEventListener("click", stopAlarm);

// Show 00:00 on load
updateDisplay(0);
});

// -------------------------------
// FUNCTIONS
// -------------------------------

function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  const parsed = parseInt(input, 10);

  if (isNaN(parsed) || parsed < 0) return;

  timeLeft = parsed;

  // Update display immediately
  updateDisplay(timeLeft);

  // Clear previous countdown
  clearInterval(timer);

  // Start countdown every 1000ms
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    }

    if (timeLeft === 0) {
      clearInterval(timer);
      startAlarm();
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  
  const display = document.getElementById("timeRemaining");
  if (!display) return; 
  display.textContent = `Time Remaining: ${mins}:${secs}`;
}

function startAlarm() {
  playAlarm();

  // Flashing background
  if (!flashing){
    flashing = setTimeout(() => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "red" ? "orange" : "red";
  }, 300);
}
}

function stopAlarm() {
  if (typeof pauseAlarm === "function") pauseAlarm();

  clearInterval(flashing);
  flashing = null;
  document.body.style.backgroundColor = "";
}


// module.exports= setAlarm;


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
