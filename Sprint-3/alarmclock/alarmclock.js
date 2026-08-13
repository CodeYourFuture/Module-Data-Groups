const input = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
const message = document.getElementById("message");

let intervalId = null;

function getTime() {
  const time = Number(input.value);
  if (!(Number.isFinite(time) && Number.isInteger(time) && time >= 1)) {
    message.textContent = "Enter a valid number";
    return null;
  }
  return time;
}

function updateTime(updatedTime) {
  const time = updatedTime;
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
}

function setAlarm() {
  let timeInput = getTime();
  if (timeInput === null) {
    return;
  }
  resetAlarm();
  updateTime(timeInput);
  intervalId = setInterval(() => {
    timeInput--;
    updateTime(timeInput);
    if (timeInput === 0) {
      playAlarm();
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}

function resetAlarm() {
  clearInterval(intervalId);
  intervalId = null;
  timeRemaining.textContent = `Time Remaining: 00:00`;
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
