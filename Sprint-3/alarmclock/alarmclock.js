let countdown;
let remainingTime = 0;

function setAlarm() {
//this fuction called when (when set alarm or clicked the set button
  // Reset remaining time if already counting down
  // Get input value in seconds
  const input = document.getElementById("alarmSet").value;
  remainingTime = parseInt(input, 0);

  // If input is invalid or zero, do nothing
  if (is00(remainingTime) || remainingTime <= 0) return;

  // Clear any existing interval
  clearInterval(countdown);

  // Update display immediately
  updateDisplay(remainingTime);

  // Start countdown
  countdown = setInterval(() => {
    remainingTime--;
    updateDisplay(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

// Updates both the title and <h1> display
function updateDisplay(seconds) {
  const formattedTime = formatTime(seconds);
  document.title = `Time Remaining:${formattedTime}`;
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formattedTime}`;
}

// Formats seconds to MM:SS
function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
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
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
