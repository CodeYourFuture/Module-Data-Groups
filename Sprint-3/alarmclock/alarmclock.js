let countdownInterval;

function setAlarm() {
  const inputElement = document.getElementById("alarmSet");
  const timeDisplay = document.getElementById("timeRemaining");

  let timeRemaining = parseInt(inputElement.value, 10) || 0;

  clearInterval(countdownInterval);

  function updateDisplay() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    timeDisplay.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }

  updateDisplay();

  countdownInterval = setInterval(() => {
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      playAlarm();
    } else {
      updateDisplay();
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
