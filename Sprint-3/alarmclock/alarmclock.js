// Given an input area of Time counter and 2 buttons: 'Set Alarm' and 'Stop Alarm'.
// When user clicks the `Set Alarm` button the counter at the
// top of the screen should change to the entered number in the `input` field.
// For example,
// if the `input` field says `10` then the title should say `Time Remaining: 00:10`.
// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can
// make the sound happen by using `playAlarm()`.
// You can stop the alarm sound by pressing the `Stop Alarm` button.

const alarmInputArea = document.querySelector("#alarmSet"); // get access to InputArea
console.log(alarmInputArea, "<---- InputArea");

const setAlarmButton = document.querySelector("#set");
console.log(setAlarmButton, "<---- Alarm Button");

const setStopButton = document.querySelector("#stop");
console.log(setStopButton, "< ---- Stop Button");

const timeRemainInfo = document.querySelector("#timeRemaining");
console.log(timeRemainInfo, "<------Remain Time");

const backgroundColor = document.querySelector("html");
console.log(backgroundColor, "<------Background Color");

let intervalId; // declare variable
let inputInfo = 0; // declare 'inputInfo' as an 'intervalId' global

function timeFormat(time) {
  // revert number into min and sec format function
  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  timeRemainInfo.textContent = `Time Remaining: ${mins}:${seconds}`;
}

function setAlarm() {
  inputInfo = Number(alarmInputArea.value); // convert input into number
  if (intervalId || flashIntervalId) {
    // edge case if during already set
    // timer user input new one value
    console.log("Timer already started!");
    window.alert("Timer already started!");
    clearInterval(intervalId);
    clearInterval(flashIntervalId);
    intervalId = null; // we should assign null to variables intervalId and
    flashIntervalId = null; // flashIntervalId because resetting interval doesn't
    alarmInputArea.value = ""; // assign new values to variables it just stop ticking
    // timer
    backgroundColor.style.backgroundColor = "";
    timeFormat(0);
    return;
  }

  if (inputInfo < 1 || isNaN(inputInfo)) {
    // to sift invalid input
    console.log("You need to input a value in seconds!");
    window.alert("You need to input a value in seconds!");
    return;
  }
  alarmInputArea.value = ""; // clean input area when data assigned to 'inputInfo'
  timeFormat(inputInfo); // set format input to min and sec

  intervalId = setInterval(function () {
    //function to set interval for
    inputInfo--; // countdown the input by 1 sec by iterat.
    if (inputInfo === 0) {
      //  if input equal 0, set alarm signal and flashing
      clearInterval(intervalId);
      timeFormat(0);
      window.playAlarm();
      changeBackgroundColorFlashing();
    } else {
      // if input not equal 0, just continue count down
      timeFormat(inputInfo);
    }
  }, 1000);
}

let flashColor = ["yellow", "pink", "lightgrey", "green"]; // array for flashing
let flashIntervalId; // declaring globally variable
let colorIndex = 0;

setStopButton.addEventListener("click", function stopFlashing() {
  console.log("click event is firing...");
  clearInterval(flashIntervalId);
  clearInterval(intervalId); // cleaning any previous possible intervals
  intervalId = null;
  flashIntervalId = null;
  inputInfo = 0;
  alarmInputArea.value = "";
  backgroundColor.style.backgroundColor = "";
  // cleaning background to default
  timeFormat(0);
  // option after clicking stop button
  window.pauseAlarm();
});

function changeBackgroundColorFlashing() {
  //function flashing colors
  if (flashIntervalId) clearInterval(flashIntervalId);
  flashIntervalId = setInterval(function () {
    // every 1 sec
    backgroundColor.style.backgroundColor = flashColor[colorIndex];
    colorIndex = (colorIndex + 1) % flashColor.length; // loop over flashColor array
  }, 1000);
  //stopFlashing(); //setTimeout(() => clearInterval(flashIntervalId), 1000);
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
