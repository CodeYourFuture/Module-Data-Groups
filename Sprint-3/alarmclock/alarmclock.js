const remainingTimeEl = document.getElementById("timeRemaining");
const setTimeInput = document.getElementById("alarmSet");
let interval;

function setAlarm() {
  pauseAlarm();
  let remainingTime = setTimeInput.value;
  remainingTimeEl.innerText = `Time Remaining: ${remainingTime}`;

  interval = setInterval(() => {
    remainingTime--;
    remainingTimeEl.innerText = `Time Remaining: ${remainingTime}`;
    if(remainingTime === 0){
      clearInterval(interval);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("./alarmsound.mp3");

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
