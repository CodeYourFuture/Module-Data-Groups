let countdownTimeoutId = null;
let isAlarmSet = false;
function getFormattedInput(inputInSeconds) {
  const minutes = Math.floor(inputInSeconds / 60);
  const seconds = inputInSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}
function countdown(inputInSeconds) {
  function updateAndContinue() {
    if (inputInSeconds <= 0) {
      playAlarm();
      document.body.style.backgroundColor = "red";
      document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${getFormattedInput(0)}`;
      countdownTimeoutId = null;
      isAlarmSet = false;
      return; //break the loop when inputInSeconds reaches 0
    }
    document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${getFormattedInput(inputInSeconds)}`;
    inputInSeconds--;
    countdownTimeoutId = setTimeout(updateAndContinue, 1000);//countdownTimeoutId: unique id number guarantees not to be reused for any new timer as long as the original timer remains active.
  }
  if (countdownTimeoutId !== null) {
    clearTimeout(countdownTimeoutId);//cancel countdownTimeoutId
    console.log("Previous countdown cleared.");
  }
  updateAndContinue();
}

function setAlarm() {
  let inputInSeconds = parseInt(document.getElementById("alarmSet").value, 10);
  if (isNaN(inputInSeconds) || inputInSeconds < 0) {
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: Invalid Input";
    return;
  }

  if (isAlarmSet) {
    alert("ERROR: An alarm is already set. Please wait for it to finish or refresh the page.");
    return;
  }
  isAlarmSet = true;
  document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${getFormattedInput(inputInSeconds)}`;
  countdown(inputInSeconds);
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearTimeout(countdownTimeoutId); // Stop the countdown
    countdownTimeoutId = null;
    isAlarmSet = false; // Reset the flag
    document.getElementById("timeRemaining").innerHTML = "Time Remaining: 00:00"; // Reset display
    document.getElementById("alarmSet").value = ""; // Clear input
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  document.body.style.backgroundColor = "white";
}

window.onload = setup;
