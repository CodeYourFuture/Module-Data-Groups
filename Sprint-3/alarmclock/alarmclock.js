let timeRemaining;
let timerInterval;

function formatTime(time) {
  const minutes =
    Math.floor(time / 60) < 10
      ? "0" + Math.floor(time / 60)
      : Math.floor(time / 60);
  const seconds = time % 60 < 10 ? "0" + (time % 60) : time % 60;

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
    timeRemaining = 0;
    playAlarm();
  }
}

function setAlarm() {
  const setTime = document.getElementById("alarmSet").value;
  timeRemaining = parseInt(setTime, 10);

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
