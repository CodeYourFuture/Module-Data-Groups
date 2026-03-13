let timeIn = document.getElementById("alarmSet").value;
let countDown = document.getElementById("timeRemaining");

function setAlarm() {
  timeIn--;
  countDown.innerHTML = "timeRemaining " + ":" + timeIn;
  if (timeIn < 1) {
    playAlarm;
    clearInterval(timer);
  }
}
const timer = setInterval(setAlarm, 1000);

// setTimeout(count, 1000);

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
