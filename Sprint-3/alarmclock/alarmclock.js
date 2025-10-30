let countdownInterval;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let seconds = Number(input.value);

  updateAlarmDisplay(seconds);

  // Clear any existing interval
  clearInterval(countdownInterval);

  countdownInterval = window.setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      updateAlarmDisplay(0);
      playAlarm();
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

window.setAlarm = setAlarm;
window.updateAlarmDisplay = updateAlarmDisplay;

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
