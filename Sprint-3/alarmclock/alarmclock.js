// Implement setAlarm() to show time in mm:ss format
// This function reads the user input (in seconds),
// converts it into minutes and seconds (mm:ss),
// and updates the "Time Remaining" heading on the page.

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const seconds = parseInt(input.value, 10);
  if (isNaN(seconds) || seconds < 0) return;

  const display = document.getElementById("timeRemaining");
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");

  display.innerText = `Time Remaining: ${minutes}:${sec}`;
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
