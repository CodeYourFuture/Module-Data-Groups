let remainingTimeElement = document.getElementById("timeRemaining");
let setAlarmBtn = document.getElementById("set");
let stopAlarmBtn = document.getElementById("stop");
let alarmSetInput = document.getElementById("alarmSet");

let timer = null;
let totalSeconds = 0;
let alarmRunning = false;

function updateDisplay() {
  if (totalSeconds < 0) {
    clearInterval(timer);
    remainingTimeElement.innerHTML = "Time's up!";
    playAlarm();

    setAlarmBtn.innerHTML = "Set Alarm";
    alarmRunning = false;
    return;
  }

  //let displayHours = Math.floor(totalSeconds / 3600);
  let displayMinutes = Math.floor(totalSeconds / 60);

  let displaySeconds = totalSeconds % 60;
  displaySeconds = String(displaySeconds).padStart(2, "0");
  //displayHours = String(displayHours).padStart(2, "0");
  displayMinutes = String(displayMinutes).padStart(2, "0");
  remainingTimeElement.innerHTML = `Time Remaining: ${displayMinutes}:${displaySeconds}`;
  totalSeconds--;
}

function setAlarm() {
  //let hours = Math.floor(alarmSetInput.value / 60);
  let minutes = alarmSetInput.value;
  alarmRunning = !alarmRunning;
  console.log(alarmRunning);

  if (!alarmRunning) {
    setAlarmBtn.innerHTML = "Restart";
    clearInterval(timer);
  } else {
    if (totalSeconds == 0) {
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
