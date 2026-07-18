const heading = document.querySelector("#timeRemaining");
const input = document.querySelector("#alarmSet");
const startBtn = document.querySelector("#set");
const stopBtn = document.querySelector("#stop");

let timer = null;

function renderTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  heading.innerText = `Time Remaining: ${mm}:${ss}`;
}

function setAlarm() {
  const rawValue = input.value.trim();
  if (rawValue === "") {
    return;
  }

  let totalSeconds = Number(rawValue);
  if (Number.isNaN(totalSeconds) || totalSeconds < 0) {
    return;
  }

  if (timer !== null) {
    clearInterval(timer);
  }

  renderTime(totalSeconds);

  if (totalSeconds === 0) {
    playAlarm();
    timer = null;
    input.value = "";
    return;
  }

  timer = setInterval(() => {
    totalSeconds--;
    renderTime(totalSeconds);

    if (totalSeconds === 0) {
      clearInterval(timer);
      timer = null;
      playAlarm();
    }
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
