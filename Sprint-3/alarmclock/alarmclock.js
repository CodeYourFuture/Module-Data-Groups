let timerInterval = null;
let remainingSeconds = 0;

// Resets timer state
function resetTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  remainingSeconds = 0;
}
//Starts the alarm counbtdown
function setAlarm() {
  // Read the minutes value from the alarm input field
  const minutesInput = document.getElementById("alarmSet");
  const seconds = parseInt(minutesInput.value, 10);
// Ignore invalid or non-positive input

if (isNaN(seconds) || seconds <= 0) {
  return;
}
  // Reset any existing timer first
  resetTimer();
  
  // Store the input as the remaining seconds to count down
  remainingSeconds = seconds;

  // Update display immediately
  updateTimeDisplay();

 // Start countdown
  timerInterval = setInterval(() => {
    remainingSeconds--;

    updateTimeDisplay();

    if (remainingSeconds <= 0) {
      resetTimer();
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
