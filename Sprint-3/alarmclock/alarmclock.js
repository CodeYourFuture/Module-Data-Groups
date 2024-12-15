// alarm clock implementation 
var audio = new Audio("alarmsound.mp3");

// Variables to keep track of the countdown timer and state
let countdownInterval;
let remainingTime = 0;
let isCountdownRunning = false;

// Function to format time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to reset the previous timer and clear flashing
function resetTimer() {
  clearInterval(countdownInterval);
  stopFlashingBackground();
  isCountdownRunning = false;
}

// Function to set the alarm
function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  const newTime = parseInt(inputField.value, 10);

  if (isNaN(newTime) || newTime <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  if (isCountdownRunning) {
    const confirmRestart = confirm(
      "A countdown is already running. Do you want to restart with the new time?"
    );
    if (!confirmRestart) return;

    resetTimer(); // Stop the current timer
  }

  remainingTime = newTime;
  isCountdownRunning = true;

  const timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerText = `Time Remaining: ${formatTime(remainingTime)}`;

  countdownInterval = setInterval(() => {
    remainingTime--;

    if (remainingTime >= 0) {
      timeRemaining.innerText = `Time Remaining: ${formatTime(remainingTime)}`;
    }

    if (remainingTime === 0) {
      playAlarm();
      resetTimer();
      flashBackground();
    }
  }, 1000);
}

// Function to stop the alarm
function pauseAlarm() {
  if (isCountdownRunning) {
    resetTimer();
    alert("Countdown paused.");
  }
  audio.pause();
}

// Flash background when time is up
function flashBackground() {
  const body = document.body;
  let isFlashing = false;

  const flashInterval = setInterval(() => {
    body.style.backgroundColor = isFlashing ? "#fff" : "#ff6666";
    isFlashing = !isFlashing;
  }, 500);

  setTimeout(() => {
    stopFlashingBackground();
  }, 5000);

  // Save flashInterval globally to clear it later
  window.flashInterval = flashInterval;
}

// Function to stop flashing background
function stopFlashingBackground() {
  clearInterval(window.flashInterval);
  document.body.style.backgroundColor = "";
}

// Function to play the alarm sound
function playAlarm() {
  audio.play();
}

// Setup event listeners when the window loads
function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

window.onload = setup;



