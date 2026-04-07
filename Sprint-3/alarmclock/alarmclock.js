// Stores the interval ID so we can clear it later
let interval = null;

// Helper function: format seconds as mm:ss and update the display
// This keeps the time-display logic in ONE place (CJ feedback: avoid repetition)
function updateTimeDisplay(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  document.getElementById("timeRemaining").innerText =
    "Time Remaining: " + mins + ":" + secs;
}

// Helper function: show or clear the feedback message in a separate element
function showFeedback(message) {
  document.getElementById("feedback").innerText = message;
}

function setAlarm() {
  // Clear any previously running countdown
  clearInterval(interval);

  // Remove alarm style and clear feedback message
  document.body.classList.toggle("alarm-activated", false);
  showFeedback("");

  // Stop any currently playing alarm sound before starting a new countdown
  // (the user may not click "Stop" first before setting a new alarm)
  pauseAlarm();

  // Read the input value and convert it to a plain integer (total seconds)
  let totalSeconds = parseInt(document.getElementById("alarmSet").value);

  // Validate input: reject NaN, negative numbers, or empty field
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    showFeedback("Please enter a valid number of seconds (0 or above).");
    return;
  }

  // If input is 0, trigger the alarm immediately instead of waiting 1 second
  if (totalSeconds === 0) {
    updateTimeDisplay(0);
    document.body.classList.toggle("alarm-activated", true);
    playAlarm();
    return;
  }

  // Display the initial time using the helper function
  updateTimeDisplay(totalSeconds);

  // Start the countdown: setInterval calls the callback every 1000 ms (1 second)
  interval = setInterval(function () {
    totalSeconds--; // subtract 1 second

    if (totalSeconds <= 0) {
      // Stop the interval when time runs out
      clearInterval(interval);

      updateTimeDisplay(0);

      // Apply alarm style using a CSS class (separates presentation from logic)
      document.body.classList.toggle("alarm-activated", true);

      // Trigger the alarm sound (defined below the DO NOT EDIT line)
      playAlarm();
      return;
    }

    // Update the display with the new remaining time
    updateTimeDisplay(totalSeconds);
  }, 1000);
}

// Make the Stop button also stop the countdown (not just the sound)
// Uses DOMContentLoaded so the button element exists before we attach the listener
// This adds a SECOND listener without modifying the original code below
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(interval);
    document.body.classList.toggle("alarm-activated", false);
  });
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
