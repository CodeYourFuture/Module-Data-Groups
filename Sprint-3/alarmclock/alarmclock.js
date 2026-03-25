let seconds = 0;
let minutes = 0;
let alarmTimeSeconds = 0;
let timeRemainingText;
let interval;
let bg = document.querySelector(".centre");

function setAlarm() {
  const getAlarmTimeNumber = document.querySelector("#alarmSet");
  alarmTimeSeconds = Number(getAlarmTimeNumber.value);
  if (alarmTimeSeconds === NaN || alarmTimeSeconds < 1) {
    alert("please enter a valid number");
    return;
  }

  clearInterval(interval);
  pauseAlarm();
  bg.style.backgroundColor = "white";

  timeRemainingText = document.querySelector("#timeRemaining");
  minutes = Math.floor(alarmTimeSeconds / 60);
  seconds = alarmTimeSeconds % 60;

  timeRemainingText.innerText =
    "Time Remaining: " +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  interval = setInterval(timeOutCheck, 1000);
}

function timeOutCheck() {
  if (alarmTimeSeconds === 0) {
    bg.style.backgroundColor = "red";
    clearInterval(interval);
    playAlarm();
    return;
  } else {
    alarmTimeSeconds = alarmTimeSeconds - 1;

    minutes = Math.floor(alarmTimeSeconds / 60);

    seconds = alarmTimeSeconds % 60;

    timeRemainingText.innerText =
      "Time Remaining: " +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
  }
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
