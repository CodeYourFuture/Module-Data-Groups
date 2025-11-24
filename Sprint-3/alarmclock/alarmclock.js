const heading = document.getElementById("timeRemaining");
const input = document.getElementById("alarmSet");
const setBtn = document.getElementById("set");

let remaining = 0;
let intervalId = null;

function format(seconds) {
  const minute = String(Math.floor(seconds / 60)).padStart(2, "0");
  const second = String(seconds % 60).padStart(2, "0");
  return `${minute}:${second}`;
}

function updateHeading() {
  heading.textContent = `Time Remaining: ${format(remaining)}`;
}

function tick() {
  if (remaining <= 0) {
    clearInterval(intervalId);
    intervalId = null;
    updateHeading();
    if (typeof window.playAlarm === "function") {
      window.playAlarm();
    }
    return;
  }
  remaining -= 1;
  updateHeading();
}

function setAlarm() {
  const value = parseInt(input.value, 10);
  // Guard clause: ignore invalid or non-positive input
  if (!Number.isFinite(value) || value <= 0) return;
  if (intervalId) clearInterval(intervalId);
  remaining = value;
  updateHeading();
  intervalId = setInterval(tick, 1000);
}

setBtn.addEventListener("click", setAlarm);
updateHeading();

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
