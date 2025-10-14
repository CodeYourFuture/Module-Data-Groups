let alarmTime;
let countDown;
function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmSet = document.getElementById("alarmSet").value;
  alarmTime = parseInt(alarmSet);
  if (countDown) {
    clearInterval(countDown);
  }
  countDown = setInterval(startCount, 1000);
  updateDisplay(timeRemaining);
}
function startCount() {
  if (alarmTime > 0) {
    alarmTime--;
    updateDisplay(document.getElementById("timeRemaining"));
  } else {
    clearInterval(countDown);
    playAlarm();
    document.body.style.background = "#e14343";
  }
}

function updateDisplay(timeRemainingElement) {
  let minutes = Math.floor(alarmTime / 60);
  let seconds = alarmTime % 60;
  timeRemainingElement.innerHTML = `Time Remaining: ${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
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
