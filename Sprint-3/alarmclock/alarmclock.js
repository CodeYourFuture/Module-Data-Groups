const displayRemainingTime = document.getElementById("timeRemaining");
const inputAlarmTime = document.getElementById("alarmSet");

let timer;

function clearTime(time) {
  let min = "00";
  let sec = "00";
  
  if (!isNaN(time) && time > 0) {
    min = Math.floor(time / 60).toString().padStart(2, "0");
    sec = (time % 60).toString().padStart(2, "0");  
    displayRemainingTime.innerText = `Time Remaining: ${min}:${sec}`;
  }
};

function setAlarm() {
  let inputTime = Number(inputAlarmTime.value);

  clearInterval(timer);
  clearTime(inputTime);
  
  timer = setInterval(() => {
    if (inputTime < 0) {
      clearInterval(timer);
      playAlarm();
    } else {
      inputTime -= 1;
      clearTime(inputTime);
    }
  }, 1000);
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
