let intervalId;

function stopAlarm() {
  audio.pause();
  audio.currentTime = 0; // Reset sound to the beginning
  clearInterval(intervalId); // Stop the countdown timer
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00"; // Set the display to 00:00
}

function updateDisplay(seconds) {
  let minutes = String(Math.floor(seconds / 60)).padStart(2, "0"); // Calculate minutes, pad with zero if needed
  let secs = String(seconds % 60).padStart(2, "0"); // Calculate seconds, pad with zero if needed
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${secs}`;
}

function setAlarm() {
  stopAlarm();

  let seconds = Number(document.getElementById("alarmSet").value);
  if (isNaN(seconds) || seconds <= 0) return; // If input is invalid, do nothing

  updateDisplay(seconds);

  intervalId = setInterval(() => {
    seconds--;
    updateDisplay(seconds);

    if (seconds <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000); // Repeat every 1 second
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup; // Run setup when the page loads
