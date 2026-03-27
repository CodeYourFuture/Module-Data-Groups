function setAlarm() {}
// Only define Audio if it doesn't exist (Node environment)
if (typeof Audio === "undefined") {
  global.Audio = class {
    constructor(src) {
      this.src = src;
    }
    play() {}
    pause() {}
  };
}

let intervalId;

const formatTime = (s) => {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const timer = document.getElementById("timeRemaining");

  const seconds = parseInt(input.value);
  if (isNaN(seconds) || seconds < 0) return;

  let remaining = seconds;

  // DO NOT EDIT BELOW HERE
  timer.textContent = `Time Remaining: ${formatTime(remaining)}`;

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    remaining--;

    timer.textContent = `Time Remaining: ${formatTime(remaining)}`;

    if (remaining <= 0) {
      clearInterval(intervalId);
      playAlarm();
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
}

window.onload = setup;
