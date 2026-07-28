let timeRemaining = 0;
let intervalId = null;

function setAlarm() {
  const input = document.getElementById("alarm-input");
  const seconds = Number(input.value);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  timeRemaining = seconds;
  updateDisplay(timeRemaining);

  // Clear any previous countdown
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Start a new countdown
  intervalId = setInterval(() => {
    timeRemaining--;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const title = document.getElementById("time-remaining");

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  title.textContent = `Time Remaining: ${mins}:${secs}`;
}

function stopAlarm() {
  clearInterval(intervalId);
  intervalId = null;
  pauseAlarm(); // or stopAlarmSound() depending on your starter code
}

const setAlarmButton = document.getElementById("set-alarm");
setAlarmButton.addEventListener("click", setAlarm);

const stopAlarmButton = document.getElementById("stop-alarm");
stopAlarmButton.addEventListener("click", stopAlarm);



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
