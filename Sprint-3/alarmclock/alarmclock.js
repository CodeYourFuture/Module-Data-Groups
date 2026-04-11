let timeRemaining;
let timerInterval = null;

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
  timeRemaining--;
  displayAlarm(timeRemaining);

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    playAlarm();
    return;
  }
}

function resetAlarm() {
  clearInterval(timerInterval);
  timerInterval = null;
  pauseAlarm();
  audio.currentTime = 0;
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

  resetAlarm();
  timeRemaining = numericTime;
  timerInterval = setInterval(decreaseAlarmTime, 1000);

  displayAlarm(timeRemaining);
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
