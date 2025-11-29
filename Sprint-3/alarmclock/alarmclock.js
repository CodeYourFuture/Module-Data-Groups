// Stores the interval ID to allow clearing the timer when needed
let intervalId;

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
function setAlarm() {
  const input = document.getElementById("alarmSet");
  let totalSeconds = parseInt(input.value);

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    alert("Please enter a valid positive number for the time.");
    return;
  }

  // Prevents multiple timers from running simultaneously
  if (intervalId) clearInterval(intervalId);

  // Ensures a clean visual state before starting a new countdown
  document.body.style.backgroundColor = "";

  updateDisplay(totalSeconds);

  intervalId = setInterval(() => {
    totalSeconds--;
    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      playAlarm();
      document.body.style.backgroundColor = "#db4d4d";
    }
  }, 1000);
}

function updateDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
}

// Resets the alarm state completely, allowing the user to set a new alarm
// The setup() listener handles pausing the audio separately
document.getElementById("stop").addEventListener("click", () => {
  if (intervalId) clearInterval(intervalId);
  document.body.style.backgroundColor = "";
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
  document.getElementById("alarmSet").value = "";
});

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
