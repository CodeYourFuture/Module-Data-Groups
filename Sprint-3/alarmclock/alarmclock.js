// This version of setAlarm() stores the user input (in seconds),
// starts a 1-second interval that decreases remainingSeconds,
// updates the display every second, and stops at 00:00.

let intervalId;
let remainingSeconds = 0;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  remainingSeconds = parseInt(input.value, 10);

  // Guard against invalid or negative input
  if (isNaN(remainingSeconds) || remainingSeconds < 0) return;

  updateDisplay();               // Show initial time
  clearInterval(intervalId);    // Clear any existing interval to avoid duplicates

  intervalId = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    // When countdown reaches 0, stop the timer
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000); // Tick every 1000ms (1 second)
}

// Reusable function to format and update the countdown display
function updateDisplay() {
  const display = document.getElementById("timeRemaining");

  const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
  const seconds = (remainingSeconds % 60).toString().padStart(2, "0");

  display.innerText = `Time Remaining: ${minutes}:${seconds}`;
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
