let countdownId;
let secondsRemaining = 0;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateTimeRemaining() {
  const heading = document.getElementById("timeRemaining");

  heading.textContent = `Time Remaining: ${formatTime(secondsRemaining)}`;
}

function setAlarm() {
  window.clearInterval(countdownId);

  const input = document.getElementById("alarmSet");
  const enteredSeconds = Number.parseInt(input.value, 10);

  if (Number.isNaN(enteredSeconds) || enteredSeconds <= 0) {
    secondsRemaining = 0;
    updateTimeRemaining();
    return;
  }

  secondsRemaining = enteredSeconds;
  updateTimeRemaining();

  countdownId = window.setInterval(() => {
    secondsRemaining -= 1;
    updateTimeRemaining();

    if (secondsRemaining === 0) {
      window.clearInterval(countdownId);
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
