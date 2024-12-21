const timeRemainingDisplay = document.querySelector("#timeRemaining");
const alarmSetInput = document.querySelector("#alarmSet");

// Buttons
const stopAlarmBtn = document.querySelector("#stop");
const setAlarmBtn = document.querySelector("#set");

// Global variables
let inputValue, seconds, minutes, hours, alarmTimer;

// Helper functions
function numberStartPadder(num, count = 2, padding = "0") {
  return num.toString().padStart(count, padding);
}

function displayAlarmInput(value) {
  seconds = numberStartPadder(value % 60);
  minutes = numberStartPadder(Math.floor(value / 60));
  return (timeRemainingDisplay.innerHTML = `Time Remaining: ${minutes}:${seconds}`);
}

function counter() {
  if (inputValue > 0) {
    inputValue--;
    displayAlarmInput(inputValue);
  } else {
    clearInterval(alarmTimer);
    playAlarm()
  }
}

// Main function
function setAlarm() {
  if (alarmTimer) {
    clearInterval(alarmTimer);
  }
  inputValue = Number(alarmSetInput.value);
  alarmSetInput.value = "";
  displayAlarmInput(inputValue);
  alarmTimer = setInterval(counter, 1000);
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
