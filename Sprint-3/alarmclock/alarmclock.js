const alarmInput = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
const setButton = document.getElementById("set");
const stopButton = document.getElementById("stop");

let counter;

setButton.addEventListener("click", setAlarm);
stopButton.addEventListener("click", pauseAlarm);

function setText() {
  const alarmValue = parseInt(alarmInput.value) || 0;

  const minutes = Math.floor(alarmValue / 60);
  const seconds = alarmValue % 60;

  const displayM = String(minutes).padStart(2, "0");
  const displayS = String(seconds).padStart(2, "0");

  timeRemaining.textContent = `Time Remaining: ${displayM}:${displayS}`;
}

function countdown() {
  let alarmValue = parseInt(alarmInput.value) || 0;

  if (alarmValue <= 0) {
    playAlarm();
    clearInterval(counter);
    return;
  }

  alarmInput.value = alarmValue - 1;
  setText();
}

function setAlarm() {
  clearInterval(counter);

  setText();

  counter = setInterval(countdown, 1000);
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
