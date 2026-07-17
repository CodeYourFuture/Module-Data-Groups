const heading = document.querySelector("#timeRemaining");
const input = document.querySelector("#alarmSet");
const startBtn = document.querySelector("#set");
const stopBtn = document.querySelector("#stop");

function setAlarm() {
  let totalSeconds = Number(input.value);
  let timer = null;

  timer = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    heading.innerText = `Time Remaining: ${mm}:${ss}`;
    if (totalSeconds === 0) {
      timer = null;
      playAlarm();
      return;
    }
    totalSeconds--;
  }, 1000);

  input.value = "";
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
