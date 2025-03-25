const timeRemaining = document.getElementById("timeRemaining");
const timeInput = document.getElementById("alarmSet");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
var audio = new Audio("alarmsound.mp3");
let time = 0;
let interval;

function setAlarm() {
  clearInterval(interval); // prevents multiple countdown intervals from running at the same time
  document.body.classList.remove("blink-bg");

  let input = parseInt(timeInput.value, 10); // Validates input and makes sure it's a positive integer
  if (isNaN(input) || input <= 0) {
    alert("Invalid number");
    return; // stops the function when an invalid input is entered
  }

  time = input;
  updateDisplay(time);

  interval = setInterval(updateTime, 1000);
}

function updateDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedSeconds = String(secs).padStart(2, "0");

  timeRemaining.innerHTML = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
}

function updateTime() {
  if (time > 0) {
    time--;
    updateDisplay(time);
  }

  if (time === 0) {
    clearInterval(interval);
    playAlarm();
  }

  function stopAlarm() {
    audio.pause();
    audio.currentTime = 0;
    document.body.classList.remove("blink-bg");
  }

  setAlarmButton.addEventListener("click", setAlarm);
  stopAlarmButton.addEventListener("click", stopAlarm);
}

// DO NOT EDIT BELOW HERE

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
  document.body.classList.add("blink-bg");
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup();
