let intervalId;

function setAlarm() {
  pauseAlarm();

  let newTimeRemaining = document.getElementById("timeRemaining");
  let alarmObj = document.getElementById("alarmSet");
  let alarmValue = parseInt(alarmObj.value, 10);

  if (isNaN(alarmValue) || alarmValue <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  if (intervalId) {
    clearInterval(intervalId);
  }

  updateDisplay(alarmValue, newTimeRemaining);

  intervalId = setInterval(() => {
    alarmValue--;
    updateDisplay(alarmValue, newTimeRemaining);

    if (alarmValue <= 0) {
      playAlarm();
      document.body.style.backgroundColor = "red";
      clearInterval(intervalId);
    }
  }, 1000);
}

function updateDisplay(seconds, newTimeRemaining) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  let minStr = String(min).padStart(2, "0");
  let secStr = String(sec).padStart(2, "0");
  newTimeRemaining.textContent = `Time Remaining: ${minStr}:${secStr}`;
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
  document.getElementById("alarmSet").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  document.body.style.backgroundColor = "";
  audio.pause();
}

window.onload = setup;
