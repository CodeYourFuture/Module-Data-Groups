let remainingTimeElement = document.getElementById("timeRemaining");
let setAlarmBtn = document.getElementById("set");
let stopAlarmBtn = document.getElementById("stop");
let alarmSetInput = document.getElementById("alarmSet");
let timeElapsed = 0;
let timer = null;

function setAlarm() {
  let currentTime = new Date();
  console.log(currentTime);
  let startTime = currentTime - timeElapsed;

  let hours = Math.floor(timeElapsed / (1000 * 60 * 60));
  let minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
  let seconds = Math.floor(timeElapsed / 1000) % 60;
  remainingTimeElement.innerHTML = `Time Remaining: ${hours}: ${minutes} :${seconds}`;
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
