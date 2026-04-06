const timeRemaining = document.getElementById("timeRemaining");

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function displayTime() {
  const alarmSet = document.getElementById("alarmSet");
  const setTime = alarmSet.value;
  timeRemaining.textContent = `Time Remaining: ${formatTime(setTime)}`;
}

function setAlarm() {
  displayTime();
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
