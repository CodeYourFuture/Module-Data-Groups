// need to set interval outside of setAlarm() so that every time the user clicks set alarm
// the previous interval is deleted. Otherwise there will be overlapping intervals
// if a user clicks on set alarm while an countdown is already active.
let intervalId = null;

function setAlarm() {
  const alarmClockInput = document.getElementById("alarmSet");
  const clockDisplay = document.getElementById("timeRemaining");
  let secondsRemaining = parseInt(alarmClockInput.value, 10);
  const setBtn = document.getElementById("set");

  if (!isValidInput(secondsRemaining)) {
    alert("please enter a valid positive integer!");
    return;
  }

  clearInterval(intervalId);

  // pause any previous alarms when new countdown is set
  pauseAlarm();

  // display immediately on click;
  displayTime(secondsRemaining, clockDisplay);

  intervalId = setInterval(() => {
    secondsRemaining--;

    if (secondsRemaining <= 0) {
      clearInterval(intervalId);
      displayTime(0, clockDisplay);
      playAlarm();
      return;
    }

    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    displayTime(secondsRemaining, clockDisplay);
  }, 1000);
}

// formats and displays countdown time to a supplied element
function displayTime(secondsRemaining, elem) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const minsFormatted = String(mins).padStart(2, "0");
  const secsFormatted = String(seconds).padStart(2, "0");
  elem.textContent = `Time Remaining: ${minsFormatted}:${secsFormatted}`;
}

// returns true if input is an integer, false otherwise
function isValidInput(input) {
  if (input === "" || isNaN(input)) {
    return false;
  }

  if (!Number.isInteger(input)) {
    return false;
  }

  if (input <= 0) {
    return false;
  }

  return true;
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
