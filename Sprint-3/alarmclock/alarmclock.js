



let timeLeft = 0;
let timer = null;
let flashing = null;

// DOM references
window.addEventListener("DOMContentLoaded", () => {

const setButton = document.getElementById("set");
const stopButton = document.getElementById("stop");

// Event listeners

if (stopButton) stopButton.addEventListener("click", stopAlarm);

// Show 00:00 on load
updateDisplay(0);
});

// -------------------------------
// FUNCTIONS
// -------------------------------

function setAlarm() {
  const inputEl = document.getElementById("alarmSet");
const input = inputEl.value.trim();

// Check empty input
if (input === "") {
  alert("Please enter a number of seconds.");
  return;
}

const parsed = parseInt(input, 10);

// Check invalid or negative number
if (isNaN(parsed) || parsed < 0) {
  alert("Please enter a valid non-negative number.");
  return;
}

  timeLeft = parsed;

  // Update display immediately
  updateDisplay(timeLeft);

  // Clear previous countdown
  clearInterval(timer);
  clearInterval(flashing);     // stop flashing if it was active
  flashing = null;
  document.body.style.backgroundColor = "";
  pauseAlarm();                // stop any playing audio
  audio.currentTime = 0;

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
