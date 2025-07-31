let intervalId;
// Formats seconds into MM:SS string
function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `Time Remaining: ${mins}:${secs}`;
}
// Called when the "Set" button is clicked
function setAlarm() {
  const input = document.getElementById("alarmSet");
  let timeRemaining = parseInt(input.value, 10);
  const display = document.getElementById("timeRemaining");

 // Immediately display the starting time
  display.innerText = formatTime(timeRemaining);

  // Clear any existing interval
  clearInterval(intervalId);

  // Start countdown
  intervalId = setInterval(() => {
    timeRemaining--;

    if (timeRemaining >= 0) {
      display.innerText = formatTime(timeRemaining);
    }

    if (timeRemaining === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

// Event listener for the "Set" button
document.getElementById("set").addEventListener("click", setAlarm);

// Export for testing environment
if (typeof module !== "undefined") {
  module.exports = { setAlarm, playAlarm };
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
