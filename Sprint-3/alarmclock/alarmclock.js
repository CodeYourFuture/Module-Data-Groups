let intervalID;
let totalSeconds;

function updateTimeDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerHTML = `Time Remaining ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function setAlarm() {
  const input = document.getElementById("alarmSet");

  if (intervalID) {
    clearInterval(intervalID);
  }

  totalSeconds = Number(input.value);

  updateTimeDisplay();

  intervalID = setInterval(() => {
    --totalSeconds;
    updateTimeDisplay();

    if (totalSeconds === 0) {
      clearInterval(intervalID);
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
