function setAlarm() {
  // Validate input
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    alert("Please enter a valid positive number");
    return;
  }

  remainingTime = totalSeconds;
  updateDisplay(remainingTime);

  startTimer();
}

function resumeAlarm() {
  if (remainingTime > 0) {
    startTimer();
  }
}
// Updates the displayed time remaining in the format MM:SS.
function updateDisplay(seconds) {
  const timeRemainingDisplay = document.getElementById("timeRemaining");
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timeRemainingDisplay.textContent = `Time Remaining: ${String(
    minutes
  ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
//Add updateDisplay function to format and display remaining time
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
