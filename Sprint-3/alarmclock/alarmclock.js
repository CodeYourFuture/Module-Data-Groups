// Use a constant for the one-second interval to make the code easier to read.
const ONE_SECOND_IN_MILLISECONDS = 1000;

// Defines variables to track the state of the alarm clock.
// Uses 'let' because these values will change as the timer runs.
let timeRemainingInSeconds = 0;
let alarmTimerIdentifier = null;

// DOM Elements (will be fetched dynamically in functions to avoid load issues)

/**
 * Formats a number of seconds into a standard "MM:SS" string.
 * This helps the user read the time easily (e.g., "01:30" instead of "90").
 *
 * @param {number} totalSeconds - The total number of seconds to format.
 * @returns {string} A string formatted as "MM:SS".
 */
function formatTime(totalSeconds) {
  // Calculates the number of full minutes.
  const minutes = Math.floor(totalSeconds / 60);

  // Calculates the remaining seconds after removing the minutes.
  const seconds = totalSeconds % 60;

  // Adds a leading zero if the minutes are less than 10.
  // This ensures the clock always looks like "09:00" rather than "9:00".
  let formattedMinutes = `${minutes}`;
  if (minutes < 10) {
    formattedMinutes = `0${minutes}`;
  }

  // Adds a leading zero if the seconds are less than 10.
  let formattedSeconds = `${seconds}`;
  if (seconds < 10) {
    formattedSeconds = `0${seconds}`;
  }

  return `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Updates the display and checks if the alarm should sound.
 * This function runs every second.
 */
function updateTime() {
  // Finds the title element on the web page to update the text.
  const titleElement = document.getElementById("timeRemaining");

  // Updates the text inside the title element with the new formatted time.
  titleElement.innerText = formatTime(timeRemainingInSeconds);

  // Checks if the countdown has finished.
  if (timeRemainingInSeconds === 0) {
    // Plays the alarm sound to alert the user.
    playAlarm();

    // Changes the background colour to red (visual alert) by adding a CSS class.
    document.body.classList.add("flash");
  } else {
    // If time is not up, decreases the remaining time by exactly one second.
    timeRemainingInSeconds = timeRemainingInSeconds - 1;
  }
}

/**
 * Starts the alarm countdown based on the time the user entered.
 * This function runs when the "Set Alarm" button is clicked.
 */
function setAlarm() {
  // check if a timer is already active.
  // If so, stops the current timer to prevent two timers running at once.
  if (alarmTimerIdentifier) {
    clearInterval(alarmTimerIdentifier);

    // Resets the background colour in case it was already flashing.
    document.body.classList.remove("flash");
  }

  // Finds the input box where the user typed the number of seconds.
  const timeInput = document.getElementById("alarmSet");

  // Converts the text input into a whole number (integer).
  const startingTime = parseInt(timeInput.value);

  // Validates the input: ensuring it is a number.
  if (isNaN(startingTime)) {
    return;
  }

  // Validates the input: ensuring it is not negative.
  if (startingTime < 0) {
    return;
  }

  // Updates the state variable with the new start time.
  timeRemainingInSeconds = startingTime;

  // Updates the screen immediately so the user sees the start time without delay.
  const titleElement = document.getElementById("timeRemaining");
  titleElement.innerText = formatTime(timeRemainingInSeconds);

  // Starts a repeating timer that calls 'updateTime' every second (1000ms).
  alarmTimerIdentifier = setInterval(() => {
    updateTime();
  }, ONE_SECOND_IN_MILLISECONDS);
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
