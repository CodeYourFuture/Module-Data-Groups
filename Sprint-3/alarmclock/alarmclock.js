const titleElement = document.getElementById("timeRemaining");

const ONE_SECOND_IN_MILLISECONDS = 1000;

let timeRemainingInSeconds = 0;
let alarmTimerIdentifier = null;

/**
 * Formats seconds into "MM:SS".
 */
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Updates the display and checks if the alarm should sound.
 */
function updateTime() {
  timeRemainingInSeconds = timeRemainingInSeconds - 1;
  displayTime();

  if (timeRemainingInSeconds === 0) {
    playAlarm();
    document.body.classList.add("flash");
    clearInterval(alarmTimerIdentifier);
    alarmTimerIdentifier = null; // Reset to null for proper state management
  }
}

/**
 * Displays the remaining time.
 */
function displayTime() {
  const titleElement = document.getElementById("timeRemaining");
  titleElement.innerText = formatTime(timeRemainingInSeconds);
}

/**
 * Initialises the alarm countdown.
 */
function setAlarm() {
  if (alarmTimerIdentifier) {
    clearInterval(alarmTimerIdentifier);
    document.body.classList.remove("flash");
  }

  const timeInput = document.getElementById("alarmSet");
  const startingTime = parseInt(timeInput.value, 10);

  if (isNaN(startingTime)) {
    return;
  }

  if (startingTime < 0) {
    return;
  }

  timeRemainingInSeconds = startingTime;

  // Initialise the audio context to enable autoplay.
  audio.play();
  audio.pause();

  displayTime();

  alarmTimerIdentifier = setInterval(() => {
    updateTime();
  }, ONE_SECOND_IN_MILLISECONDS);
}

// Add a listener to stop the flashing effect without modifying the protected pauseAlarm function below.
const stopButton = document.getElementById("stop");
if (stopButton) {
  stopButton.addEventListener("click", () => {
    document.body.classList.remove("flash");
  });
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
