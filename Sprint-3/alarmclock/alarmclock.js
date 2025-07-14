// 1. When I put a number into the alarmInput field
// 2. Then when I click on "set alarm"
// 3. the number inside the alarm input field should be the same as the numbers next to "Time Remaining:"

let interval = null;
let currentTime = 0;

function setAlarm() {
  // Stop any running alarm and reset background before starting a new one
  pauseAlarm();
  document.body.style.backgroundColor = ""; // reset background

  // Get seconds from input field
  const alarmInput = document.getElementById("alarmSet").value;

  // This turns the string into a number.
  currentTime = parseInt(alarmInput, 10);

  // Check if input is not a number or less than or equal to 0
  if (isNaN(currentTime) || currentTime <= 0) {
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: 00:00";
    return;
  }

  updateTime();

  // Clear any existing interval
  if (interval) {
    clearInterval(interval);
  }

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

// // DO NOT EDIT BELOW HERE

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
  document.body.style.backgroundColor = ""; // reset background
}

window.onload = setup;

module.exports = {
  testEnvironment: "jsdom",
  setAlarm,
  pauseAlarm,
  updateTime,
  playAlarm,
};
