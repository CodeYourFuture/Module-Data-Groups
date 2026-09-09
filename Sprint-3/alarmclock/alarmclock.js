function setAlarm() {}
const display = document.querySelector("#timeRemaining");
const totalSeconds = document.querySelector("#alarmSet");
const setButton = document.querySelector("#set");
const stopButton = document.querySelector("#stop");
let countDownInterval;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  return `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function reset() {
  clearInterval(countDownInterval);
  display.textContent = "Time Remaining: 00:00";
  display.style.color = "black";
  setButton.disabled = false;
  document.body.style.background = "";
}

setButton.addEventListener("click", () => {
  let timeLeft = Number(totalSeconds.value);

  if (timeLeft <= 0 || isNaN(timeLeft)) {
    alert("please enter a number greater than zero (0)!");
    return;
  }
  setButton.disabled = true;

  const warningTime = 10; // seconds

  display.textContent = formatTime(timeLeft);
  countDownInterval = setInterval(() => {
    display.textContent = formatTime(timeLeft);
    timeLeft--;

    if (timeLeft >= 0) {
      display.textContent = formatTime(timeLeft);
    }

    if (timeLeft <= warningTime) {
      display.style.color = "red";
    }

    if (timeLeft <= 0) {
      clearInterval(countDownInterval);
      document.body.style.backgroundColor = "grey";
      playAlarm();
    }
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(countDownInterval);
  reset();
  pauseAlarm();
});

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
