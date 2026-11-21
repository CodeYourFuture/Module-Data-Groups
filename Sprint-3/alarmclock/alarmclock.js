let intervalID;
let flashAlarm;
let seconds;
let isRunning = false;
const h1 = document.getElementById("timeRemaining");

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function stopFlash() {
  clearInterval(flashAlarm);
  document.body.style.backgroundColor = "";
}

function pauseCountdown() {
  clearInterval(intervalID);
  isRunning = false;
}

function startCountdown() {
  if (isRunning) return;
  isRunning = true;
  intervalID = setInterval(() => {
    seconds--;
    h1.textContent = `Time Remaining: ${formatTime(seconds)}`;

    if (seconds === 0) {
      clearInterval(intervalID);
      playAlarm();
      isRunning = false;
      let isRed = true;
      flashAlarm = setInterval(() => {
        document.body.style.backgroundColor = isRed ? "red" : "orange";
        isRed = !isRed;
      }, 500);
    }
  }, 1000);
}

function resumeCountdown() {
  if (seconds > 0 && !isRunning) {
    startCountdown();
  }
}

function setAlarm() {
  clearInterval(intervalID);
  isRunning = false;
  stopFlash();
  pauseAlarm();

  const input = document.getElementById("alarmSet");

  seconds = Number(input.value);
  if (!Number.isInteger(seconds) || seconds <= 0) {
    alert("Please enter a positive number of seconds");
    return;
  }

  h1.textContent = `Time Remaining: ${formatTime(seconds)}`;
  startCountdown();
}

window.addEventListener("load", () => {
  document.getElementById("stop").addEventListener("click", stopFlash);
  document.getElementById("pause").addEventListener("click", pauseCountdown);
  document.getElementById("resume").addEventListener("click", resumeCountdown);
});

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
