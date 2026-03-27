let timeRemaining;
let timerId;
function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  timeRemaining = Number(input);

  clearInterval(timerId);

  updateDisplay();

  timerId = setInterval(() => {
    timeRemaining--;
    updateDisplay();

    if (timeRemaining <= 0) {
      timeRemaining = 0;
      updateDisplay();
      clearInterval(timerId);
      playAlarm();
    }
  }, 1000);
}
function updateDisplay() {
  const display = document.getElementById("timeRemaining");

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  display.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
