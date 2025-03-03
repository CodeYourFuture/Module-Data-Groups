let remainingTimeElement = document.getElementById("timeRemaining");
let setAlarmBtn = document.getElementById("set");
let stopAlarmBtn = document.getElementById("stop");
let alarmSetInput = document.getElementById("alarmSet");

let timer = null;
let totalSeconds = 0;
let alarmRunning = false;

function setAlarm() {
  let seconds = alarmSetInput.value;
  function updateDisplay() {
    if (totalSeconds < 0) {
      clearInterval(timer);
      remainingTimeElement.innerHTML = "Time's up!";
      playAlarm();
      alarmRunning = false;
      return;
    }

    let displayMinutes = Math.floor(totalSeconds / 60);
    let displaySeconds = totalSeconds % 60;

    displayMinutes = String(displayMinutes).padStart(2, "0");
    displaySeconds = String(displaySeconds).padStart(2, "0");
    remainingTimeElement.innerHTML = `Time Remaining: ${displayMinutes}:${displaySeconds}`;
    totalSeconds--;
  }

  if (alarmRunning) {
    clearInterval(timer);
  } else {
    if ((alarmRunning = true)) {
      totalSeconds = seconds;
      updateDisplay();
      timer = setInterval(updateDisplay, 1000);
    }
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
