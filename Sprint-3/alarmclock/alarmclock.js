let timeRemaining;
let timerInterval;

function formatTime(time) {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
}

function displayAlarm(time) {
  const alarmBox = document.getElementById("timeRemaining");
  alarmBox.textContent = `Time Remaining: ${formatTime(time)}`;
}

function decreaseAlarmTime() {
  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    timeRemaining = 0;
    playAlarm();
    return;
  }

  timeRemaining--;
  displayAlarm(timeRemaining);
}

function setAlarm() {
  const setTime = document.getElementById("alarmSet").value;

  const numericTime = parseInt(setTime, 10);
  if (isNaN(numericTime)) {
    alert(
      "Please enter your desired time in numbers, e.g., 120 for 2 minutes."
    );
    return;
  }
  if (numericTime < 0) {
    alert("Please enter a non-negative number.");
    return;
  }

  timeRemaining = numericTime;

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  displayAlarm(timeRemaining);
  timerInterval = setInterval(decreaseAlarmTime, 1000);
}

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
