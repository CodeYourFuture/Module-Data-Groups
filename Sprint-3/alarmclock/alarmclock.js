// Given an input area of Time counter and 2 buttons: 'Set Alarm' and 'Stop Alarm'.
// When user clicks the `Set Alarm` button the counter at the
// top of the screen should change to the entered number in the `input` field.
// For example,
// if the `input` field says `10` then the title should say `Time Remaining: 00:10`.
// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can
// make the sound happen by using `playAlarm()`.
// You can stop the alarm sound by pressing the `Stop Alarm` button.

const alarmInputArea = document.querySelector("#alarmSet");
console.log(alarmInputArea, "<---- InputArea");

const setAlarmButton = document.querySelector("#set");
console.log(setAlarmButton, "<---- Alarm Button");

const setStopButton = document.querySelector("#stop");
console.log(setStopButton, "< ---- Stop Button");

const timeRemainInfo = document.querySelector("#timeRemaining");
console.log(timeRemainInfo, "<------Remain Time");

const backgroundColor = document.querySelector("html");
console.log(backgroundColor, "<------Background Color");

let intervalId;
let inputInfo = 0;

function timeFormat(time) {
  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  timeRemainInfo.textContent = `Time Remaining: ${mins}:${seconds}`;
}

function setAlarm() {
  inputInfo = Number(alarmInputArea.value);
  if (inputInfo < 1 || isNaN(inputInfo)) {
    console.log("You need to input a value in seconds!");
    window.alert("You need to input a value in seconds!");
    return;
  }
  alarmInputArea.value = "";
  timeFormat(inputInfo);

  intervalId = setInterval(function () {
    inputInfo--;
    if (inputInfo === 0) {
      clearInterval(intervalId);
      timeFormat(0);
      window.playAlarm();
      changeBackgroundColorFlashing();
    } else {
      timeFormat(inputInfo);
    }
  }, 1000);
}

//setAlarmButton.addEventListener("click", function setAlarm() {
//console.log("click event is firing...");
//});
let flashColor = ["yellow", "pink", "lightgrey", "green"];
let flashIntervalId;
let colorIndex = 0;

setStopButton.addEventListener("click", function stopFlashing() {
  console.log("click event is firing...");
  clearInterval(flashIntervalId);
  backgroundColor.style.backgroundColor = "";
  window.pauseAlarm();
});

//function changeBackgroundColor() {
//backgroundColor.style.backgroundColor = "lightblue";
//}

function changeBackgroundColorFlashing() {
  if (flashIntervalId) clearInterval(flashIntervalId);
  flashIntervalId = setInterval(function () {
    backgroundColor.style.backgroundColor = flashColor[colorIndex];
    colorIndex = (colorIndex + 1) % flashColor.length;
  }, 1000);
  //stopFlashing();
}
window.playAlarm = playAlarm;
window.pauseAlarm = pauseAlarm;

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
