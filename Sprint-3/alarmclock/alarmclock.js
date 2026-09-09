const alarmTime = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
let remainingSeconds;
let timer;

function setAlarm() {
  pauseAlarm();

  remainingSeconds = Number(alarmTime.value);

  if (!Number.isFinite(remainingSeconds) || remainingSeconds <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  displayTimeRemaining();

  timer = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      displayTimeRemaining();
      clearInterval(timer);
      window.playAlarm();
      return;
    }

    displayTimeRemaining();
  }, 1000);
}

function displayTimeRemaining() {
  let minutes = Math.floor(remainingSeconds / 60);
  let seconds = remainingSeconds % 60;
  const formatTime =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  timeRemaining.textContent = `Time Remaining: ${formatTime}`;
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
  clearInterval(timer);
  audio.pause();
}

window.onload = setup;
