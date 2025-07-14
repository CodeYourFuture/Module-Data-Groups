function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let timeRemaining = parseInt(input, 10);

  if (isNaN(timeRemaining) || timeRemaining < 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  // Update the display immediately
  updateDisplay(timeRemaining);

  // Clear any existing interval
  if (window.alarmInterval) clearInterval(window.alarmInterval);

  // Start countdown
  window.alarmInterval = setInterval(() => {
    timeRemaining--;

    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(window.alarmInterval);
      playAlarm();
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const formatted = `00:${seconds.toString().padStart(2, "0")}`;
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${formatted}`;
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
