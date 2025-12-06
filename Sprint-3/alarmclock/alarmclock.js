let timerId = null;
let remainingSeconds = 0;

function updateDisplay() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${minutes}:${seconds}`;
}

function startCountdown() {
  timerId = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      clearInterval(timerId);
      timerId = null;
      playAlarm();
    }
  }, 1000);
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  if (input.value === "") return;
  remainingSeconds = Number(input.value);
  if (!Number.isFinite(remainingSeconds)) return;
  clearInterval(timerId);
  timerId = null;

  if (remainingSeconds <= 0) {
    remainingSeconds = 0;
    updateDisplay();
    playAlarm();
  } else {
    updateDisplay();
    startCountdown();
  }
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
