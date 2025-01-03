// Variables to keep track of the countdown timer
let countdownInterval; // This is where we'll store the timer ID
let remainingTime; // This keeps track of how many seconds are left

/**
 * This function starts the alarm countdown
 */
function setAlarm() {
  // Grab the number the user entered in the input box
  const input = document.getElementById("alarmSet").value;
  remainingTime = parseInt(input, 10); // Turn it into a whole number

  // Check if the user entered a valid number
  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert("Hey, please type a positive number!"); // Warn them if it's not valid
    return; // Stop the function if the input is bad
  }

  // Show the initial countdown time on the screen
  updateTimeDisplay(remainingTime);

  // If there was already a countdown running, stop it first
  clearInterval(countdownInterval);

  // Start a new countdown that updates every second
  countdownInterval = setInterval(() => {
    remainingTime -= 1; // Reduce the time by 1 second
    updateTimeDisplay(remainingTime); // Update what the user sees

    // When the timer hits 0, stop it and play the alarm
    if (remainingTime <= 0) {
      clearInterval(countdownInterval); // Stop the timer
      playAlarm(); // Play the alarm sound
    }
  }, 1000); // Run this code every 1 second
}

/**
 * This function updates the countdown on the screen
 * @param {number} seconds - The time left in seconds
 */
function updateTimeDisplay(seconds) {
  // Convert seconds into minutes and seconds
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0"); // Add a "0" if needed
  const secs = String(seconds % 60).padStart(2, "0"); // Same for seconds

  // Update the text on the page to show the remaining time
  document.getElementById("timeRemaining").innerText = `Time Remaining: ${minutes}:${secs}`;
}

/**
 * This function stops the alarm and clears the timer
 */
function pauseAlarm() {
  audio.pause(); // Stop the sound if it's playing
  clearInterval(countdownInterval); // Stop the countdown
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

// This is the alarm sound
var audio = new Audio("alarmsound.mp3");

/**
 * This function sets up the buttons when the page loads
 */
function setup() {
  // When the "Set Alarm" button is clicked, start the alarm
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  // When the "Stop Alarm" button is clicked, stop the alarm
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

/**
 * This function plays the alarm sound
 */
function playAlarm() {
  audio.play(); // Start playing the sound
}

/**
 * This is another function to stop the sound
 */
function pauseAlarm() {
  audio.pause(); // Stop playing the sound
}

// Run the setup function when the page is fully loaded
window.onload = setup;


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
