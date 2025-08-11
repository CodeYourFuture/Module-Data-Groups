//Global Variables
const timeDisplay = document.getElementById("timeRemaining"); // Timer display element
const alarmInput = document.getElementById("alarmSet"); // Input field for alarm time
let countDownInterval = null; // To store interval ID for the countdown
let backgroundflashInterval = null; // To store interval ID for flashing background
let remainingTime = 0; //Time remaining to resume from
let isPaused = false; // Flag to toggle between pause and resume

// Clear the input field
function clearInputBox() {
  alarmInput.value = "";
}

//Main Function
function setAlarm() {
  if (countDownInterval) {
    clearInterval(countDownInterval);
  }

  let time = Number(alarmInput.value);
  if (!isNaN(time) && time > 0) {
    remainingTime = time; // Set the remaining time
    isPaused = false;
    document.getElementById("pause-resume").textContent = "pause"; // Set the buton text
    startCountdown();
  } else {
    timeDisplay.textContent = "Please enter a valid number";
  }
}

// Update display
function updateDisplay() {
  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const seconds = String(remainingTime % 60).padStart(2, "0");
  timeDisplay.textContent = `Time Remaining: ${minutes}:${seconds}`;
}

// Start the Countdown
function startCountdown() {
  updateDisplay();
  countDownInterval = setInterval(() => {
    if (remainingTime <= 0) {
      startFlashingBackground();
      clearInterval(countDownInterval);
      countDownInterval = null;
      playAlarm();
    } else {
      remainingTime -= 1;
      updateDisplay();
    }
  }, 1000); // Run every 1000mms (1 second)
}

// Pause or Resume the Countdown
function togglePauseResume() {
  const button = document.getElementById("pause-resume");

  if (isPaused) {
    // Resume the timer
    startCountdown();
    button.textContent = "Pause";
  } else {
    // Pause the timer
    clearInterval(countDownInterval);
    countDownInterval = null;
    button.textContent = "Resume";
  }

  isPaused = !isPaused; // Toggle the state
}

// Start flashin background
function startFlashingBackground() {
  let isFlashing = true;
  backgroundflashInterval = setInterval(() => {
    document.body.style.backgroundColor = isFlashing ? "#FD7272" : "#1B9CFC";
    isFlashing = !isFlashing;
  }, 500); // Toggle every 400ms
}

// Stop flashing background
function stopFlashingBackground() {
  clearInterval(backgroundflashInterval);
  backgroundflashInterval = null;
  document.body.style.backgroundColor = "";
}

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("pause-resume").addEventListener("click", () => {
    togglePauseResume();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(); // Stop alarm sound
    clearInputBox(); // Clear the Input text
    stopFlashingBackground(); // Stop flashing background
    clearInterval(countDownInterval); // Stop the Timer
    countDownInterval = null; // Reset interval ID
    remainingTime = 0; // Reset remainig time
    isPaused = false; // Reset pause state
    document.getElementById("pause-resume").textContent = "Pause"; // Reset the Button text
    updateDisplay();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
