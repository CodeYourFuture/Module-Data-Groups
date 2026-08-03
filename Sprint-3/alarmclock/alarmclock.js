const oneSecondInMilliseconds = 1000;
const lengthOfAlarmSound = 20000;

let timeLeft;
let intervalID;
let timeoutID;
let display;

function setAlarm() {
  stopAlarm();

  // set up time
  timeLeft = document.getElementById("alarmSet").value;
  display = document.getElementById("timeRemaining");

  // validate result
  const result = parseInt(timeLeft);
  if (isNaN(result)) {
    return;
  }

  display.textContent = formatTime(timeLeft);

  if (!intervalID) {
    intervalID = setInterval(updateTimer, 1000);
  }

  console.log(`Alarm set for ${timeLeft} seconds`);
}

function updateTimer() {
  timeLeft = timeLeft - 1;

  display.textContent = formatTime(timeLeft);

  if (timeLeft <= 0) {
    alarmFinished();
    cleanUp();
  }
}

// give a time in seconds
function formatTime(seconds) {
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  const seconds_padded = String(seconds).padStart(2, "0");
  const minutes_paddded = String(minutes).padStart(2, "0");

  const formatted_seconds = `Time Remaining: ${minutes_paddded}:${seconds_padded}`;
  return formatted_seconds;
}

function stopAlarm() {
  pauseAlarm();
  cleanUp();
}

function cleanUp() {
  clearInterval(intervalID);
  clearTimeout(timeoutID);
  timeoutID = null;
  intervalID = null;
}

function alarmFinished() {
  audio.loop = true;
  playAlarm();
  console.log("Alarm finished");
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
