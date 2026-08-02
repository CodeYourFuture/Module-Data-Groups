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
  } //input validation (for emptry input)
  remainingTime = Number(alarmTime);
  if (remainingTime < 0) {
    return;
  } //input validation(for -ve number input)
  const showTimeMinutes = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const showTimeSeconds = (remainingTime % 60).toString().padStart(2, "0");
  timeRemainingElement.innerText = showTimeMinutes + ":" + showTimeSeconds;
  if (remainingTime === 0) {
    triggerAlarm(); //valid input, when input = 0 then immediately triggers alarm
  } else {
    intervalID = setInterval(countDown, 1000);
  } //valid input, when input = 10 then countdown starts
}
setButtonElement.addEventListener("click", setAlarm);
function countDown() {
  if (remainingTime <= 0) {
    clearInterval(intervalID);
    triggerAlarm();
    return;
  } /*to avoid any chance of -ve counting after countdown reached 0 from 10. 
   when countdown = 0 alarm triggers immediately and returns from the code */

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
