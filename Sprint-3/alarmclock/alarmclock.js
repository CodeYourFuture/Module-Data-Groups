let countdownInterval;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let seconds = Number(input.value);

  // Validation: Check if the input is a valid positive number
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid positive number for seconds.");
    return; // Stop the function if the input is invalid
  }

  updateAlarmDisplay(seconds);

  // Change the background color to green when the timer starts
  document.body.style.backgroundColor = "green";

  // Clear any existing interval
  clearInterval(countdownInterval);

  countdownInterval = window.setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      updateAlarmDisplay(0);
      // Change the background color to red when alarm hits zero
      document.body.style.backgroundColor = "red";
      playAlarm(); // Assuming you have a playAlarm function defined elsewhere
    } else {
      updateAlarmDisplay(seconds);
    }
  }, 1000);
}

function updateAlarmDisplay(seconds) {
  const display = document.getElementById("timeRemaining");
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  display.textContent = `Time Remaining: ${minutes}:${secs}`;
}

function stopAlarm() {
  // Clear the countdown interval
  clearInterval(countdownInterval);
  countdownInterval = null;

  // Reset the background color and the displayed time
  document.body.style.backgroundColor = "";
  updateAlarmDisplay(0); // Reset to 00:00
}

// Add event listeners to buttons
document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("stop").addEventListener("click", stopAlarm);

window.setAlarm = setAlarm;
window.updateAlarmDisplay = updateAlarmDisplay;
window.stopAlarm = stopAlarm;

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
