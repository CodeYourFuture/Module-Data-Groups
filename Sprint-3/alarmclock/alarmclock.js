// Step 1: Access time input and buttons
const timeInputElement = document.querySelector("#alarmSet");
const setAlarmButtonElement = document.querySelector("#set");
const stopAlarmButtonElement = document.querySelector("#stop");
const timeRemainingElement = document.querySelector("#timeRemaining");

let intervalId = null; // To track the active countdown interval

// Step 2: Event listener for "Set Alarm" button
setAlarmButtonElement.addEventListener("click", function () {
  const timeInputValue = parseInt(timeInputElement.value, 10);

  // Validate input
  if (isNaN(timeInputValue) || timeInputValue <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  // Clear any existing countdown interval
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Start the countdown
  startCountdown(timeInputValue);
});

// Step 3: Countdown function
function startCountdown(initialTime) {
  let timeRemaining = initialTime;

  // Update the display immediately (no delay)
  timeRemainingElement.innerText = `Time Remaining: ${formatTime(timeRemaining)}`;

  // Set up the countdown interval
  intervalId = setInterval(() => {
    timeRemaining--;

    // Update the display
    timeRemainingElement.innerText = `Time Remaining: ${formatTime(timeRemaining)}`;

    // Stop the countdown when it reaches zero
    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      intervalId = null; // Clear the interval tracker
      timeRemainingElement.innerText = "Time Remaining: 00:00";
      playAlarm();
    }
  }, 1000);
}

// Step 4: Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

// Step 5: Alarm handling
function setAlarm() {
  const timeInputValue = parseInt(timeInputElement.value, 10);
  if (!isNaN(timeInputValue) && timeInputValue > 0) {
    startCountdown(timeInputValue);
  }
}
 

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
     stopAlarmButtonElement.addEventListener("click", () => pauseAlarm());
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
