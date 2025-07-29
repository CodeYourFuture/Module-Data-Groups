function setAlarm() {
  const timerDom = document.getElementById("timeRemaining");
  let timeInputValue = document.getElementById("alarmSet").value;
  setTimer(timerDom, formatTime(timeInputValue));
  const interval = setInterval(function () {
    setTimer(timerDom, formatTime(timeInputValue));
    if (timeInputValue == 0) {
      playAlarm();
      clearInterval(interval);
    }
    timeInputValue--;
    // to stop timer if new one entered
    document.getElementById("set").addEventListener("click", () => {
      clearInterval(interval);
    });
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.trunc(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
  return formattedTime;
}

function setTimer(timerDon, timeInputValue) {
  timerDon.textContent = "Time Remaining: " + String(timeInputValue);
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
