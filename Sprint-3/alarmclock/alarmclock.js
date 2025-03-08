const input = document.querySelector("input");
let time = 0;
let timerId;

function setAlarm() {
  time = input.valueAsNumber;
  changeDisplayTime(time);
  timerId = setInterval(deduction, 1000);
}

function deduction() {
  --time;  
  changeDisplayTime(time);
  if (time == 0) {
    clearInterval(timerId);
    playAlarm()
  }

}

function changeDisplayTime(time) {
  minutesRemaining = Math.floor(time / 60).toString();
  paddedMinutesRemaining = minutesRemaining.padStart(2, "0");
  secondsRemaining = (time % 60).toString();
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
}

window.onload = setup;
