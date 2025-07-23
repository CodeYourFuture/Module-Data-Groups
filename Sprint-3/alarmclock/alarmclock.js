let intervalID;
function updateTimeDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timeRemaining.innerHTML = `Time Remaining ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const input = document.getElementById("alarmSet");
  let totalSeconds = Number(input.value);

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
