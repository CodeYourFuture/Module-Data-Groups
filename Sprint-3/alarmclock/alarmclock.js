let countdown;
let remainingTime = 0;

function setAlarm() {}
//this fuction called when (when set alarm or clicked the set button

  // Get input value in seconds
const input = document.getElementById("alarmSet").value;
  remainingTime = parseInt(input, 0);

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
