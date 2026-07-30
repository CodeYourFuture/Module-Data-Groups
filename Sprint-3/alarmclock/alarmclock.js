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

const timeRemainingElement = document.querySelector("#timeRemaining");
const alarmSetElement = document.querySelector("#alarmSet");
const setButtonElement = document.querySelector("#set");
const stopButtonElement = document.querySelector("#stop");
const bodyElement = document.querySelector("body");
const alarmSoundElement = document.querySelector("#alarmSound");

let remainingTime;
let intervalID;
function triggerAlarm() {
  bodyElement.style.backgroundColor = "yellow";
  alarmSoundElement.play();
}
function setAlarm() {
  clearInterval(intervalID);
  const alarmTime = alarmSetElement.value;
  if (alarmTime === "") {
    return;
  }
  remainingTime = Number(alarmTime);
  if (remainingTime < 0) {
    return;
  }
  const showTimeMinutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const showTimeSeconds = (remainingTime % 60).toString().padStart(2, "0");
  timeRemainingElement.innerText = showTimeMinutes + ":" + showTimeSeconds;
  if (remainingTime === 0) {
    triggerAlarm();
  } else {
    intervalID = setInterval(countDown, 1000);
  }
}
setButtonElement.addEventListener("click", setAlarm);
function countDown() {
  if (remainingTime <= 0) {
    clearInterval(intervalID);
    triggerAlarm();
    return;
  }
  remainingTime -= 1;
  const remainingMinutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (remainingTime % 60).toString().padStart(2, "0");
  timeRemainingElement.innerText = remainingMinutes + ":" + remainingSeconds;
}
function stopAlarm() {
  clearInterval(intervalID);
  alarmSoundElement.pause();
  alarmSoundElement.currentTime = 0;
  bodyElement.style.backgroundColor = "";
}
stopButtonElement.addEventListener("click", stopAlarm);
