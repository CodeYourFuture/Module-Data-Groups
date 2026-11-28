const remainingTimeEl = document.getElementById("timeRemaining");
const setTimeInput = document.getElementById("alarmSet");
let interval;

function setAlarm() {
  pauseAlarm();
  let remainingTime = setTimeInput.value;
  let remainingMin = Math.floor(remainingTime/60);
  let remainingSec = remainingTime % 60;
  remainingTimeEl.innerText = `Time Remaining: ${remainingMin.toString().padStart(2, "0")}:${remainingSec.toString().padStart(2, "0")}`;

  interval = setInterval(() => {
    remainingTime--;
    let remainingMin = Math.floor(remainingTime / 60);
    let remainingSec = remainingTime % 60;
    remainingTimeEl.innerText = `Time Remaining: ${remainingMin.toString().padStart(2, "0")}:${remainingSec.toString().padStart(2, "0")}`;
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
  clearInterval(interval);
  audio.pause();
}

window.onload = setup;
