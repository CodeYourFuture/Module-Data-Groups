var audio = new Audio("alarmsound.mp3");
let countdownInterval = null; // Global variable to track the countdown interval

function setAlarm() {
  document.querySelector(".quadrat").classList.remove("flash");
  const input = document.getElementById("alarmSet");
  const time = parseInt(input.value, 10); // Fetch the value of the input in seconds

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  // Clear any existing countdown to prevent overlapping intervals
  clearInterval(countdownInterval);

  document.querySelector(".quadrat").classList.add("disabled"); // Disable the .quadrat element
  updateTimeDisplay(time); // Display the initial time remaining
  startCountdown(time); // Start the countdown
}

function startCountdown(initialTime) {
  let time = initialTime;

  countdownInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null; // Reset the interval reference
      updateTimeDisplay(0);
      handleAlarmEnd(); // Handle end-of-alarm behavior
    } else {
      time--;
      updateTimeDisplay(time); // Update the displayed time
    }
  }, 1000);
}

function handleAlarmEnd() {
  document.getElementById("timeRemaining").innerHTML = "Time's up!";
  playAlarm(); // Play alarm sound
  triggerFlash(); // Trigger the flashing effect
}

function updateTimeDisplay(seconds) {
  document.getElementById("timeRemaining").innerHTML =
    "Time Remaining: " + formatTime(seconds);
}

function triggerFlash() {
  document.querySelector(".quadrat").classList.add("flash"); // Add the flash class to .quadrat
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm(); // Set the alarm and start the countdown
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}
// Function to play the alarm sound
function playAlarm() {
  audio.play();
}

// Function to pause the alarm sound
function pauseAlarm() {
  audio.pause();
}

// Initialize the setup when the page loads
window.onload = setup;
