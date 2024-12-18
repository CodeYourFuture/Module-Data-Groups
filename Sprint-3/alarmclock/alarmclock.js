var audio = new Audio("alarmsound.mp3");

function setAlarm() {
  const time = parseInt(document.getElementById("alarmSet").value); // Fetch the value of the input in seconds

  document.querySelector(".quadrat").classList.add("disabled"); // Disable the .quadrat element

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  // Display the initial time remaining
  document.getElementById("timeRemaining").innerHTML =
    "Time Remaining: " + formatTime(time);

  // Start the countdown
  startCountdown(time);
}

function startCountdown(timeRemaining) {
  let time = timeRemaining;

  // Update the time remaining every second
  const countdownInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timeRemaining").innerHTML = "Time's up!";
      playAlarm(); // Play alarm when time is up
      triggerFlash(); // Trigger the flashing effect
    } else {
      time--; // Decrease time by 1 second
      document.getElementById("timeRemaining").innerHTML =
        "Time Remaining: " + formatTime(time);
    }
  }, 1000);
}

// Function to trigger the flashing effect
function triggerFlash() {
  document.querySelector(".quadrat").classList.add("flash"); // Add the flash class to .quadrat
}

// Helper function to format time from seconds to HH:MM:SS
function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

document.getElementById("stop").addEventListener("click", () => {
  pauseAlarm(); // Stop the alarm
  document.querySelector(".quadrat").classList.remove("flash"); // Disable the .quadrat element
});
// Function to play the alarm sound
function playAlarm() {
  audio.play();
}

// Function to pause the alarm sound
function pauseAlarm() {
  audio.pause();
}

// Set up event listeners for the buttons
function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm(); // Set the alarm and start the countdown
  });
}

// Initialize the setup when the page loads
window.onload = setup;
