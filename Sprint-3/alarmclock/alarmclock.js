const input = document.querySelector("input");
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
    clearInterval(timerId);
    playAlarm();
    document.body.style.background = "#ff4d4d";
  }
}

function changeDisplayTime(secondsLeft) {
  minutesRemaining = Math.floor(secondsLeft / 60).toString();
  paddedMinutesRemaining = minutesRemaining.padStart(2, "0");
  secondsRemaining = (secondsLeft % 60).toString();
  paddedSecondsRemaining = secondsRemaining.padStart(2, "0");
  const timeRemaining = `${paddedMinutesRemaining}:${paddedSecondsRemaining}`;
  const charactersLeftP = document.querySelector("#timeRemaining");
  charactersLeftP.innerText = `Time Remaining: ${timeRemaining}`;
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
  document.body.style.background = "#ffffff";
}

window.onload = setup;
