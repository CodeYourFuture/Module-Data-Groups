const input = document.getElementById("alarmSet");
const timeDisplay = document.querySelector("span");

let alarmInterval = null;

function setAlarm() {
  // sanitize input: convert to number, floor to integer seconds, clamp to >= 0
  let timeInput = Math.floor(Number(input.value) || 0);
  if (timeInput < 0) timeInput = 0;

  // clear any existing interval so multiple clicks don't create multiple timers
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }

  // handle negative input explicitly
  const rawValue = Number(input.value);
  if (rawValue < 0) {
    timeDisplay.textContent = "Invalid value";
    return;
  }

  let minutes = Math.floor(timeInput / 60);
  let seconds = timeInput % 60;

  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}`;

  // if the input is 0, trigger the alarm immediately
  if (timeInput <= 0) {
    playAlarm();
    return;
  }

  alarmInterval = setInterval(() => {
    timeInput--;
    let remainingMinutes = Math.floor(timeInput / 60);
    let remainingSeconds = timeInput % 60;
    remainingMinutes = remainingMinutes.toString().padStart(2, "0");
    remainingSeconds = remainingSeconds.toString().padStart(2, "0");
    timeDisplay.textContent = `${remainingMinutes}:${remainingSeconds}`;
    if (timeInput <= 0) {
      playAlarm();
      clearInterval(alarmInterval);
      alarmInterval = null;
    }
  }, 1000);
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
  audio.currentTime = 0;
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }
}

window.onload = setup;
