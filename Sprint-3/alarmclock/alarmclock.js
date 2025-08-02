let intervalId;
let seconds = 0;
let flashIntervalId;
let isPaused = false;
let pausedSeconds = 0;

function setAlarm() {
  stopAlarm();

  seconds = Number(document.getElementById("alarmSet").value);
  if (isNaN(seconds) || seconds <= 0) return; // If input is invalid, do nothing
  isPaused = false;
  updateDisplay(seconds);
  pausedSeconds = seconds;
  startInterval();
}

function updateDisplay(seconds) {
  let minutes = String(Math.floor(seconds / 60)).padStart(2, "0"); // Calculate minutes, pad with zero if needed
  let secs = String(seconds % 60).padStart(2, "0"); // Calculate seconds, pad with zero if needed
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${secs}`;
}

function startInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (!isPaused) {
      seconds--;
      updateDisplay(seconds);
      if (seconds <= 0) {
        seconds = 0;
        clearInterval(intervalId);
        playAlarm();
        startFlashing();
      }
      pausedSeconds = seconds; // Update for pause
    }
  }, 1000); // Repeat every 1 second
}

// Flashing background
/*function startFlashing() {
  if (typeof jest !== "undefined") return;
  let flash = false;
  flashIntervalId = setInterval(() => {
    document.body.style.backgroundColor = flash ? "red" : "white";
    flash = !flash;
  }, 400);
}
*/

function stopFlashing() {
  clearInterval(flashIntervalId);
  document.body.style.backgroundColor = ""; // Reset to default
}

function stopAlarm() {
  audio.pause();
  audio.currentTime = 0; // Reset sound to the beginning
  clearInterval(intervalId); // Stop the countdown timer
  stopFlashing();
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00"; // Set the display to 00:00
  pausedSeconds = 0;
  isPaused = false;
}

// PAUSE/RESUME
function pauseAlarm() {
  isPaused = true;
  audio.pause();
  clearInterval(flashIntervalId);
}

function resumeAlarm() {
  if (isPaused && pausedSeconds > 0) {
    isPaused = false;
    seconds = pausedSeconds;
    updateDisplay(seconds);
    clearInterval(intervalId); //
    startInterval();
  } else {
    return;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
  document
    .getElementById("pause")
    .addEventListener("click", () => pauseAlarm());
  document
    .getElementById("resume")
    .addEventListener("click", () => resumeAlarm());
}

function playAlarm() {
  audio.play();
}

window.onload = setup; // Run setup when the page loads
