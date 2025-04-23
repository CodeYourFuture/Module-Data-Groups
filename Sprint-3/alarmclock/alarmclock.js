"use strict";
const input = document.querySelector("input");
const stopButton = document.getElementById("stop");
const setButton = document.getElementById("set");
let secondsLeft = 0;
let timerId;

function setAlarm() {
  secondsLeft = input.valueAsNumber;
  changeDisplayTime(secondsLeft);
  timerId = setInterval(deduction, 1000);
}

function deduction() {
  --secondsLeft;
  changeDisplayTime(secondsLeft);
  if (secondsLeft == 0) {
    stopButton.disabled = false;
    clearInterval(timerId);
    playAlarm();
    document.body.style.background = "#ff4d4d";
  }
}

function changeDisplayTime(secondsLeft) {
  const minutesRemaining = Math.floor(secondsLeft / 60).toString();
  const paddedMinutesRemaining = minutesRemaining.padStart(2, "0");
  const secondsRemaining = (secondsLeft % 60).toString();
  const paddedSecondsRemaining = secondsRemaining.padStart(2, "0");
  const timeRemaining = `${paddedMinutesRemaining}:${paddedSecondsRemaining}`;
  const charactersLeftP = document.querySelector("#timeRemaining");
  charactersLeftP.innerText = `Time Remaining: ${timeRemaining}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  stopButton.disabled = true;
  setButton.addEventListener("click", () => {
    setAlarm();
  });

  stopButton.addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  document.body.style.background = "#ffffff";
  stopButton.disabled = true;
}

window.onload = setup;
