let setTimerForAlarm = document.getElementById("timeRemaining").textContent;

function setAlarm() {
  let newTimeRemaining = document.getElementById("timeRemaining");
  alarmObj = document.getElementById("alarmSet");
  let alarmValue = parseInt(alarmObj.value, 10);
  let min = Math.floor(alarmValue / 60);
  let sec = alarmValue % 60;
  console.log(min);
  if (min >= 0 && sec >= 0) {
    minStr = String(min).padStart(2, "0");
    secStr = String(sec).padStart(2, "0");
  }
  newTimeRemaining.textContent = `Time Remaining: ${minStr}:${secStr}`;
  let setTimerForAlarm = document.getElementById("timeRemaining").textContent;

  // console.log(setTimerForAlarm);
}

let intervalId;

function setAlarm() {
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

  function updateDisplay(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    let minStr = String(min).padStart(2, "0");
    let secStr = String(sec).padStart(2, "0");
    newTimeRemaining.textContent = `Time Remaining: ${minStr}:${secStr}`;
  }

  updateDisplay(alarmValue);

  intervalId = setInterval(() => {
    alarmValue--;
    updateDisplay(alarmValue);

    if (alarmValue <= 0) {
      playAlarm();
      document.body.style.backgroundColor = "red";
      clearInterval(intervalId);
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
    document.body.style.backgroundColor = "";
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
