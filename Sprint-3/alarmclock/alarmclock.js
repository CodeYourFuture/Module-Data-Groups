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

function setAlarm() {
  let inputInfo = Number(alarmInputArea.value);
  if (inputInfo < 1) {
    console.log("You need to input a value");
    window.alert("You need to input a value!");
    return;
  }
  alarmInputArea.value = "";
  const mins = String(Math.floor(inputInfo / 60)).padStart(2, "0");
  const seconds = String(inputInfo % 60).padStart(2, "0");
  timeRemainInfo.textContent = `Time Remaining: ${mins}:${seconds}`;

  intervalId = setInterval(function () {
    if (inputInfo <= 0) {
      clearInterval(intervalId);
      playAlarm();
      changeBackgroundColorFlashing();
      return;
    } else {
      inputInfo--;
      const mins = String(Math.floor(inputInfo / 60)).padStart(2, "0");
      const seconds = String(inputInfo % 60).padStart(2, "0");
      timeRemainInfo.textContent = `Time Remaining: ${mins}:${seconds}`;
    }
  }, 1000);
}

//setAlarmButton.addEventListener("click", function setAlarm() {
//console.log("click event is firing...");
//});

setStopButton.addEventListener("click", function stopFlashing() {
  console.log("click event is firing...");
  clearInterval(flashIntervalId);
  backgroundColor.style.backgroundColor = "";
  pauseAlarm();
});

//function changeBackgroundColor() {
//backgroundColor.style.backgroundColor = "lightblue";
//}

let flashColor = ["yellow", "pink", "lightgrey", "green"];
let flashIntervalId;
let colorIndex = 0;

function changeBackgroundColorFlashing() {
  if (flashIntervalId) clearInterval(flashIntervalId);
  flashIntervalId = setInterval(function () {
    backgroundColor.style.backgroundColor = flashColor[colorIndex];
    colorIndex = (colorIndex + 1) % flashColor.length;
  }, 1000);
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
