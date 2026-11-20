const remainingTimeEl = document.getElementById("timeRemaining");
const setTimeInput = document.getElementById("alarmSet");
let interval;
//let remainingTime = setTimeInput.value;

function setAlarm() {
  let remainingTime = setTimeInput.value;
  remainingTimeEl.innerText = `Time Remaining: ${remainingTime}`;

  interval = setInterval(() => {
    remainingTime--;
    remainingTimeEl.innerText = `Time Remaining: ${remainingTime}`;
    if(remainingTime === 0){
      clearInterval(interval);
      playAlarm();
      console.log("hellooo")
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
