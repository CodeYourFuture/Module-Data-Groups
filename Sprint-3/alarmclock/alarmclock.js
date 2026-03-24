let countdown;
let remainingTime = 0;

function setAlarm() {
const input = document.getElementById("alarmSet");
const seconds = parseInt(input.value, 10);
if (isNaN(seconds) || seconds <= 0) return;

clearInterval(countdown);
remainingTime = seconds;

const display = document.getElementById("timeRemaining");
display.textContent = `Time Remaining: ${formatTime(remainingTime)}`;

countdown = setInterval(() => {
  remainingTime--;
  display.textContent = `Time Remaining: ${formatTime(remainingTime)}`;
  
  if (remainingTime <= 0) {
    clearInterval(countdown);
    if (typeof playAlarm === "function") {
      window.playAlarm();
    }
  }
}, 1000);
}

function formatTime(seconds) {
const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
const secs = String(seconds % 60).padStart(2, "0");
return `${mins}:${secs}`;
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
