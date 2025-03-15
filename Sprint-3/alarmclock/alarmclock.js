const timeRemaining = document.getElementById("timeRemaining");
const timeInput = document.getElementById("alarmSet");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
var audio = new Audio("alarmsound.mp3");
let time = 0;
let interval;

function setAlarm() {
  time = timeInput.value;
  timeRemaining.innerHTML = "Time Remaining: " + time;
  interval = setInterval(updateTime, 1000);
}

function updateTime() {
  if (time > 0) {
    time = time - 1;
    timeRemaining.innerHTML = "Time Remaining: " + time;
  } else if (time === 0) {
    playAlarm();
    clearInterval(interval);
  }
}
// countdown every one second
// set alarm
// setAlarmButton.addEventListener("click", function () {});
// make the alarm play sound at 0

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
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup();
