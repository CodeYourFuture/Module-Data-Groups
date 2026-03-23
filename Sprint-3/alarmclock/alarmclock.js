// DOM elements
const setAlarmBtn = document.getElementById("set");
const stopAlarmBtn = document.getElementById("stop");
const timeRemaining = document.getElementById("timeRemaining");

// Interval variable for countdown
let alarmInterval;

// Your function to develop;
function setAlarm() {
  const timeValue = document.getElementById("alarmSet").value;
  if (!timeValue || timeValue <= 0) {
    alert("Please enter a number greater than 0");
    return;
  }

  let totalSeconds = parseInt(timeValue);

  // Stop previous countdown if any
  if (alarmInterval) clearInterval(alarmInterval);

  // Show initial countdown immediately
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  timeRemaining.innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Start countdown
  alarmInterval = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      clearInterval(alarmInterval); // stop countdown
      timeRemaining.innerText = "Time Remaining: 00:00";
      playAlarm(); // play alarm sound
    } else {
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      timeRemaining.innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  }, 1000); // repeat every 1 second
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
