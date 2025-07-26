const timeRemainingDisplay = document.querySelector("#timeRemaining");
const alarmSetInput = document.querySelector("#alarmSet");
const alarmContainer = document.querySelector(".centre");
const bodyContainer = document.querySelector("body");

// Buttons
const stopAlarmBtn = document.querySelector("#stop");
const setAlarmBtn = document.querySelector("#set");

function setAlarm() {}

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
