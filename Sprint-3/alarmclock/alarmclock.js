let intervalID = null;
let seconds = 0;
let isPaused = false;

function setAlarm() {
  const alarmSetInputElement = document.getElementById("alarmSet");
  const setAlarmButton = document.getElementById("set");
  const delay = 1 * 1000;

  const updateTimeRemaining = () => {
    if (!isPaused && seconds <= 0) {
      document.body.className = "flash";
      playAlarm();
      clearInterval(intervalID);
      intervalID = null;
      setAlarmButton.textContent = "Set Alarm";
      return;
    }

    seconds--;
    setRemainingTime(seconds);
  };

  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    isPaused = true;
    setAlarmButton.textContent = "Resume Alarm";
    return;
  }

  if (isPaused) {
    isPaused = false;
    intervalID = setInterval(updateTimeRemaining, delay);
    setAlarmButton.textContent = "Pause Alarm";
    return;
  }

  seconds = Number(alarmSetInputElement.value);
  setRemainingTime(seconds);
  intervalID = setInterval(updateTimeRemaining, delay);
  setAlarmButton.textContent = "Pause Alarm";
}

function setRemainingTime(seconds) {
  const timeString = new Date(seconds * 1000).toLocaleTimeString([], {
    minute: "numeric",
    second: "numeric",
  });

  document.getElementById(
    "timeRemaining"
  ).innerHTML = `Time Remaining: ${timeString}`;
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
