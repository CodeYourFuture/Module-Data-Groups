let countdownInterval;
let timeRemaining = 0;

const timeInput = document.getElementById("alarmSet");

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const seconds = parseInt(input.value);
  pauseAlarm();
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  clearInterval(countdownInterval); // Stop any existing countdown
  timeRemaining = seconds;
  updateDisplay();

  countdownInterval = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
    }
    updateDisplay();
  }, 1000);
}

function updateDisplay() {
  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const seconds = String(timeRemaining % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${minutes}:${seconds}`;
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
  document.getElementById("timeRemaining").classList.add("flash");
  document.body.classList.add("flash-background");
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
  clearInterval(countdownInterval);
  document.getElementById("timeRemaining").classList.remove("flash");
  document.body.classList.remove("flash-background");
  document.getElementById("alarmSet").value = "";
}

window.onload = setup;
