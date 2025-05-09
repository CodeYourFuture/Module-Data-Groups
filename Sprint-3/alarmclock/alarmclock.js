// Variables to keep track of the countdown timer
let countdownInterval; // This is where we'll store the timer ID
let remainingTime; // This keeps track of how many seconds are left

// This is the alarm sound
const audio = new Audio("alarmsound.mp3");

/**
 * This function starts the alarm countdown
 */
function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  remainingTime = parseInt(input, 10);

  // Check if the user entered a valid number
  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert("Hey, please type a positive number!");
    return;
  }

  // Show the initial countdown time on the screen
  updateTimeDisplay(remainingTime);

  // Stop any existing countdown
  clearInterval(countdownInterval);

  // Start a new countdown that updates every second
  countdownInterval = setInterval(() => {
    remainingTime -= 1;
    updateTimeDisplay(remainingTime);

    // When the timer hits 0, stop it and play the alarm
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
    }
  }, 1000);
}

/**
 * This function updates the countdown on the screen
 * @param {number} seconds - The time left in seconds
 */
function updateTimeDisplay(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("timeRemaining").innerText = `Time Remaining: ${minutes}:${secs}`;
}

/**
 * This function plays the alarm sound
 */
function playAlarm() {
  audio.play();
}

/**
 * This function stops the alarm and clears the timer
 */
function pauseAlarm() {
  audio.pause();
  clearInterval(countdownInterval);
}

/**
 * This function sets up the buttons when the page loads
 */
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

// Run the setup function when the page is fully loaded
window.onload = setup;
