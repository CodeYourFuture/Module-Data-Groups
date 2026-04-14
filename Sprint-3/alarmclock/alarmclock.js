let timeLeft = 0;
let timer = null;

function formatTime(seconds) {
  let mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  let secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function updateDisplay(timeLeft) {
  const display = document.getElementById("timeRemaining");
  display.textContent = `Time Remaining: ${formatTime(timeLeft)}`;
}

function setAlarm() {
  const input = document.getElementById("alarmSet").value;

  timeLeft = parseInt(input, 10);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  if (timer) {
    clearInterval(timer);
  }

  updateDisplay(timeLeft);

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(timer);
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
