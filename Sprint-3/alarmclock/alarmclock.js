const alarmTime = document.querySelector("#alarmSet");
const timeRemaining = document.querySelector("#timeRemaining");
let remainingSeconds;

function setAlarm() {
  remainingSeconds = Number(alarmTime.value);
  displayTimeRemaining();

  let timer = setInterval(() => {
    remainingSeconds--;
    displayTimeRemaining();
    if (remainingSeconds === 0) {
      clearInterval(timer);
      window.playAlarm();
    }
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
  audio.pause();
}

window.onload = setup;
