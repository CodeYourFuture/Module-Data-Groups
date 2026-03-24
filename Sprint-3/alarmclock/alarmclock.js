let interval;
let timeRemaining = 0;

function setAlarm() {
  clearInterval(interval);

  const input = document.getElementById("alarmSet");
  const display = document.getElementById("timeRemaining");

  timeRemaining = parseInt(input.value);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    return;
  }

  updateDisplay();

  interval = setInterval(() => {
    timeRemaining--;

    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(interval);
      display.textContent = "Time Remaining: 00:00";
      playAlarm();
    }
  }, 1000);

  function updateDisplay() {
    let seconds = timeRemaining;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    display.textContent = `Time Remaining: 00:${seconds}`;
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
