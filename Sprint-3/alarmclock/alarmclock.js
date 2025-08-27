let timeRemaining = 0;
let intervalId;
const audio = new Audio("alarmsound.mp3");

/**
 * Sets the alarm countdown.
 * Validates input, resets alarm and timer.
 */
function setAlarm() {
  const input = document.getElementById("alarmSet");
  timeRemaining = parseInt(input.value, 10);

  // Validation: check for valid number
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a positive number of seconds.");
    return;
  }

  // Clear any existing countdown
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Pause any currently playing alarm sound
  pauseAlarm(true);

  // Update the initial time display
  updateTimeDisplay();

  // Start new interval countdown
  intervalId = setInterval(() => {
    timeRemaining--;
    updateTimeDisplay();

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
      startFlashingBackground(); // Flash background when alarm finishes
    }
  }, 1000);
}

/**
 * Updates the countdown time on screen
 */
function updateTimeDisplay() {
  const heading = document.getElementById("timeRemaining");
  const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (timeRemaining % 60).toString().padStart(2, "0");
  heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
}

/**
 * Plays the alarm sound from beginning
 */
function playAlarm() {
  audio.currentTime = 0;
  audio.play();
}

/**
 * Stops the alarm sound
 * @param {boolean} resetAudio - if true, reset to start
 */
function pauseAlarm(resetAudio = false) {
  audio.pause();
  if (resetAudio) {
    audio.currentTime = 0;
  }
}

/**
 * Flashes the background color when alarm finishes
 */
function startFlashingBackground() {
  let flashCount = 0;
  const maxFlashes = 10; // Number of flashes (5 times)
  const originalColor = document.body.style.backgroundColor;
  const flashInterval = setInterval(() => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "red" ? "white" : "red";
    flashCount++;
    if (flashCount >= maxFlashes) {
      clearInterval(flashInterval);
      document.body.style.backgroundColor = originalColor;
    }
  }, 300);
}

/**
 * Pauses the countdown timer
 */
function pauseTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

/**
 * Resumes the countdown timer
 */
function resumeTimer() {
  if (!intervalId && timeRemaining > 0) {
    intervalId = setInterval(() => {
      timeRemaining--;
      updateTimeDisplay();

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        playAlarm();
        startFlashingBackground();
      }
    }, 1000);
  }
}

/**
 * Setup event listeners after page load
 */
function setup() {
  // Set alarm button
  document.getElementById("set").addEventListener("click", setAlarm);
  // Stop alarm button
  document.getElementById("stop").addEventListener("click", () => pauseAlarm(true));
  // Pause timer button
  document.getElementById("pause").addEventListener("click", pauseTimer);
  // Resume timer button
  document.getElementById("resume").addEventListener("click", resumeTimer);
}

window.onload = setup;