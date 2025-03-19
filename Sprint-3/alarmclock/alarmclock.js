let countdown;
let remainingTime;
let isPaused = false;

function setAlarm() {
  let time = parseInt(document.getElementById("alarmSet").value);

  if (isNaN(time) || time <= 0) return;

  remainingTime = time;
  updateDisplay(remainingTime);

  clearInterval(countdown);

  countdown = setInterval(() => {
    if (!isPaused) {
      remainingTime--;
      updateDisplay(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(countdown);
        playAlarm();
        startFlashingBackground();
      }
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${secs}`;
}

function pauseAlarm() {
  clearInterval(countdown);
  stopFlashingBackground();
  audio.pause();
  isPaused = true;
}

function startFlashingBackground() {
  let body = document.body;
  let isFlashing = false;

  countdown = setInterval(() => {
    body.style.backgroundColor = isFlashing ? "white" : "red";
    isFlashing = !isFlashing;
  }, 500);
}

function stopFlashingBackground() {
  clearInterval(countdown);
  document.body.style.backgroundColor = "";
}

function resumeAlarm() {
  if (remainingTime > 0 && isPaused) {
    isPaused = false;
    setAlarm();
  }
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
