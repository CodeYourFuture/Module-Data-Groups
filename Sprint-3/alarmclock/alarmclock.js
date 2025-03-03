let remainingTimeElement = document.getElementById("timeRemaining");
let setAlarmBtn = document.getElementById("set");
let stopAlarmBtn = document.getElementById("stop");
let alarmSetInput = document.getElementById("alarmSet");

let timer = null;
let totalSeconds = 0;
let alarmRunning = false;

function setAlarm() {
  let minutes = alarmSetInput.value;

  function updateDisplay() {
    if (totalSeconds < 0) {
      clearInterval(timer);
      remainingTimeElement.innerHTML = "Time's up!";
      playAlarm();

      setAlarmBtn.innerHTML = "Set Alarm";
      alarmRunning = false;
      return;
    }

    let displayHours = Math.floor(totalSeconds / 3600);
    let displayMinutes = Math.floor((totalSeconds % 3600) / 60);

    displayHours = String(displayHours).padStart(2, "0");

    displayMinutes = String(displayMinutes).padStart(2, "0");
    remainingTimeElement.innerHTML = `Time Remaining: ${displayHours}:${displayMinutes}`;
    totalSeconds--;
  }
  alarmRunning = !alarmRunning;
  console.log(alarmRunning);

  if (!alarmRunning) {
    setAlarmBtn.innerHTML = "Restart";
    clearInterval(timer);
  } else {
    if (!timer) {
      totalSeconds = minutes * 60;
    }
    setAlarmBtn.innerHTML = "Pause";
    updateDisplay();
    timer = setInterval(updateDisplay, 1000);
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
