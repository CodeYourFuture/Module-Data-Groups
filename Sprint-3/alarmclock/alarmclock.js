let countdownInterval = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let totalSeconds = parseInt(input.value, 10);

  // Return early if input is invalid
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    return;
  }

  // 1. Reset Audio: Stop audio if it's currently playing from a previous alarm
  pauseAlarm();
  audio.currentTime = 0; // Rewind audio track back to the start

  // 2. Reset Interval: Clear existing active countdown
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  const heading = document.getElementById("timeRemaining");

  function updateDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remSeconds).padStart(2, "0");

    heading.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
  }

  updateDisplay(totalSeconds);

  input.value = "";

  countdownInterval = setInterval(() => {
    totalSeconds--;
    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
    }
  }, 1000);
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
