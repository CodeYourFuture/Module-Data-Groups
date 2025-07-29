let intervalId;
// Formats seconds into MM:SS string
function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `Time Remaining: ${mins}:${secs}`;
}

  // Set initial time immediately
  display.innerText = formatTime(timeRemaining);

  // Clear any existing timer
  clearInterval(intervalId);

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

document.getElementById("set").addEventListener("click", setAlarm);

// Export for testing if needed
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
