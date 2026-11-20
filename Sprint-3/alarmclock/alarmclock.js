const hRemainingTime = document.getElementById("timeRemaining");
const iAlarmSetFor = document.getElementById("alarmSet");

let innerTime = 0;
let timeIsTicking = false;

let myInterval = null;

function alarmTick() {
  innerTime = innerTime - 1;
  if (innerTime <= 0) {
    clearInterval(myInterval);
    playAlarm();
    myInterval = null;
  }
  printTime();
}

function printTime() {
  let minutes = Math.floor(innerTime / 60);
  let seconds = innerTime % 60;
  hRemainingTime.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} `;
}

function setAlarm() {
  if (myInterval !== null) {
    clearInterval(myInterval);
    myInterval = null;
  }

  innerTime = Number(iAlarmSetFor.value);
  printTime();

  timeIsTicking = true;
  iAlarmSetFor.value = null;

  myInterval = setInterval(alarmTick, 1000);
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
