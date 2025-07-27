let interval = null;
let currentTime = 0;

function setAlarm() {
  pauseAlarm();
  document.body.style.backgroundColor = "";

  const alarmInput = document.getElementById("alarmSet").value;
  currentTime = parseInt(alarmInput, 10);

  if (isNaN(currentTime) || currentTime <= 0) {
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: 00:00";
    return;
  }

  updateTime(); // ✅ Show initial time immediately

  clearInterval(interval);
  interval = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateTime();
    }

    if (currentTime === 0) {
      playAlarm();
      document.body.style.backgroundColor = "#db1b3e66";
      clearInterval(interval);
    }
  }, 1000);
}

function updateTime() {
  const minutes = String(Math.floor(currentTime / 60)).padStart(2, "0");
  const seconds = String(currentTime % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${seconds}`;
}

// Alarm sound
const audio = new Audio("alarmsound.mp3");

function playAlarm() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAlarm() {
  clearInterval(interval);
  audio.pause();
  document.body.style.backgroundColor = "";
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

window.onload = setup;

module.exports = {
  testEnvironment: "jsdom",
  setAlarm,
  pauseAlarm,
  updateTime,
  playAlarm,
};
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
