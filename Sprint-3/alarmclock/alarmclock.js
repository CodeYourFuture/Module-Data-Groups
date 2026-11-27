let timer;
function setAlarm() {
  const alarmInput = document.querySelector("#alarmSet");
  const alarmTime = document.querySelector("#timeRemaining");
  let timeInSecond = Number(alarmInput.value);
  if (
    alarmInput.value.trim() === "" ||
    !Number.isFinite(timeInSecond) ||
    timeInSecond <= 0
  ) {
    return;
  }
  clearInterval(timer);
  alarmTime.innerText = `Time Remaining: ${formatTime(timeInSecond)}`;
  timer = setInterval(() => {
    timeInSecond = timeInSecond - 1;
    if (timeInSecond <= 0) {
      clearInterval(timer);
      playAlarm();
      document.body.style.background = "red";
      timeInSecond = 0;
    } else {
      alarmTime.innerText = `Time Remaining: ${formatTime(timeInSecond)}`;
    }
    alarmTime.innerText = `Time Remaining: ${formatTime(timeInSecond)}`;
  }, 1000);
}

function formatTime(timeInSecond) {
  let second = timeInSecond % 60;
  let minute = Math.floor(timeInSecond / 60);
  return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
audio.loop = true;

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}
function stopAlarm() {
  clearInterval(timer);
  audio.pause();
  audio.currentTime = 0;
  document.body.style.background = "pink";

  document.querySelector("#timeRemaining").innerText = "Time Remaining: 00:00";
}

window.onload = setup;
