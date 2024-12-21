const timeRemainingDisplay = document.querySelector("#timeRemaining");
const alarmSetInput = document.querySelector("#alarmSet");
const alarm = document.querySelector(".centre");
const body = document.querySelector("body");

// Buttons
const stopAlarmBtn = document.querySelector("#stop");
const setAlarmBtn = document.querySelector("#set");

// Disable set button if input is empty
setAlarmBtn.disabled = true;

// Disable stop button if no timer running
stopAlarmBtn.disabled = true;

function init() {
  setAlarmBtn.disabled = true;
  stopAlarmBtn.disabled = true;
  alarm.removeAttribute("style");
  body.removeAttribute("style");
  clearInterval(alarmTimer);
}

stopAlarmBtn.addEventListener("click", init);

function activateSetButton() {
  alarmSetInput.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      setAlarmBtn.disabled = false;
    } else {
      setAlarmBtn.disabled = true;
    }
  });
}
activateSetButton();

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
    playAlarm();
    alarm.style.backgroundColor = "#607D8B";
    body.style.backgroundColor = "#FF5252";
    stopAlarmBtn.disabled = false;
  }
}

// Main function
function setAlarm() {
  if (alarmTimer) {
    clearInterval(alarmTimer);
  }
  inputValue = Number(alarmSetInput.value);
  alarmSetInput.value = "";
  setAlarmBtn.disabled = true;
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
