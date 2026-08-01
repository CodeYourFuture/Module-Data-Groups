const oneSecondInMilliseconds = 1000;
const lengthOfAlarmSound = 20000;

function setAlarm() {
  // set up time
  let now = Date.now();
  let timeLeft = document.getElementById("alarmSet").value;

  // validate result
  const result = parseInt(timeLeft);
  if (isNaN(result)) {
    return;
  }

  setTimeout(alarmFinished, timeLeft * oneSecondInMilliseconds);
  audio.loop = true;
  playAlarm();
}

function stopAlarm() {
  pauseAlarm();
}

function alarmFinished() {
  console.log("Alarm finished");
  stopAlarm();
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
