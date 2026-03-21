let timerInterval = null;
let remainingSeconds = 0;

function setAlarm() {
  // Read the minutes value from the alarm input field
  const minutesInput = document.getElementById("alarmSet");
  const minutes = parseInt(minutesInput.value, 10);
  // Ignore invalid or non-positive input
  if (isNaN(minutes) || minutes <= 0) {
    return;
  }
  // Store the input as the remaining seconds to count down
  remainingSeconds = minutes * 60;
  // Clear any existing timer before starting a new one
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  // Immediately render the starting time on screen
  updateTimeDisplay();

  // Tick every second and decrement remainingSeconds
  timerInterval = setInterval(() => {
    remainingSeconds = remainingSeconds - 1;

    updateTimeDisplay();

    if (remainingSeconds <= 0) {
      // Countdown finished — stop the timer and trigger the alarm
      clearInterval(timerInterval);
      timerInterval = null;
      remainingSeconds = 0;
      // Ensure the display shows exactly 00:00
      updateTimeDisplay();
      playAlarm();
    }
  }, 1000);
}

// Converts remainingSeconds into MM:SS format and updates the display
function updateTimeDisplay() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const timeDisplay = document.getElementById("timeRemaining");
  timeDisplay.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
