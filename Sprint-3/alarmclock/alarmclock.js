const timeRemainingDisplay = document.querySelector("#timeRemaining");
const alarmSetInput = document.querySelector("#alarmSet");

// Buttons
const stopAlarmBtn = document.querySelector("#stop");
const setAlarmBtn = document.querySelector("#set");
let inputValue, seconds, minutes, hours;

function numberStartPadder(num, count = 2, padding = "0") {
  return num.toString().padStart(count, padding);
}

console.log(numberStartPadder(7));

function setAlarm() {
  inputValue = Number(alarmSetInput.value);
  seconds = numberStartPadder(inputValue % 60);
  minutes = numberStartPadder(Math.floor(inputValue / 60));
  timeRemainingDisplay.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
    console.log("set");
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
