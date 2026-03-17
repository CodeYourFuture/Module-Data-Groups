let countdownId = null;

function formatTime(totalSeconds) {// Convert total seconds to minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateHeading(totalSeconds) {// Update the heading with the formatted time remaining
  const heading = document.getElementById("timeRemaining");// Get the heading element using its DOM ID
  heading.innerText = `Time Remaining: ${formatTime(totalSeconds)}`;// Set the text of the heading to show the time remaining in the format "Time Remaining: MM:SS"
}

function setAlarm() {
  const input = document.getElementById("alarmSet");// Get the input element using its DOM ID
  let remainingSeconds = Number(input.value);// Convert the input value to a number representing the total seconds for the countdown

  if (!Number.isFinite(remainingSeconds) || remainingSeconds < 0) {// Check if the input is a valid number and non-negative
    remainingSeconds = 0;// If the input is invalid, set remainingSeconds to 0
  }

  if (countdownId !== null) {// If there is an existing countdown, clear it before starting a new one  

    clearInterval(countdownId);
  }

  updateHeading(remainingSeconds);// Update the heading to show the initial time remaining before starting the countdown

  countdownId = setInterval(() => {// Start a new interval that will execute the provided function every 1000 milliseconds (1 second)
    remainingSeconds -= 1;

    if (remainingSeconds <= 0) {// If the remaining seconds reach 0 or below, stop the countdown and play the alarm
      updateHeading(0);
      clearInterval(countdownId);
      countdownId = null;
      playAlarm();
      document.body.style.backgroundColor = "red"; // change background colour
      return;
    }

    updateHeading(remainingSeconds);
  }, 1000);
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
