function setAlarm() {
  // Get the alarm time
  const alarmSetInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
// Parse the input value as an integer (number of seconds)
let seconds = parseInt(alarmSetInput.value, 10);

// Validate the input
if (isNaN(seconds) || seconds <= 0) {
  alert("Please enter a valid number of seconds.");
  return;
}

// Function to update the timer display
function updateTimer() {
  // Format minutes and seconds as MM:SS
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timeRemaining.textContent = `Time Remaining: ${minutes}:${secs}`;


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
