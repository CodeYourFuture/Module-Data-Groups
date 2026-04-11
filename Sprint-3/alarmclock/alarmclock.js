let timerInterval = null;

// Resets timer state
function resetTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Stop any playing alarm sound
  pauseAlarm();

  // Reset display to 00:00
  updateTimeDisplay(0);
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

  //local variable (no global sharing)
  let remainingSeconds = seconds;

  // Update display immediately
  updateTimeDisplay(remainingSeconds);

  // Start countdown
  timerInterval = setInterval(() => {
    remainingSeconds--;

    updateTimeDisplay(remainingSeconds);

    if (remainingSeconds <= 0) {
      resetTimer();
      updateTimeDisplay(0);
      playAlarm();
    }
  }, 1000);
}

// Converts remainingSeconds into MM:SS format and updates the display
function updateTimeDisplay(remainingSeconds) {
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
