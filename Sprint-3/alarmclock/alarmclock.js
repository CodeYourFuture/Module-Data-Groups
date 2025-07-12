function setAlarm() {
  const input = document.getElementById("alarmSet");
  let seconds = Number(input.value);

  updateAlarmDisplay(seconds);
  // Set a timeout to play the alarm after the specified seconds
  // Note: This will not work if the page is closed or refreshed]
  countdownInterval = setInterval(() => {
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
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  display.textContent = `Time Remaining: ${minutes}:${secs}`;
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
