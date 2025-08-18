  let countdownTimer;
  let timeRemaining = 0;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  timeRemaining = Number(input.value);

  updateDisplay(timeRemaining);
  clearInterval(countdownTimer);

  countdownTimer = setInterval(function () {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(countdownTimer);
      updateDisplay(0);
      playAlarm();
    } else {
      updateDisplay(timeRemaining);
    }
  }, 1000);
}
function updateDisplay(seconds) {
  const heading = document.getElementById("timeRemaining");

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const minuteStr = String(minutes).padStart(2, '0');
  const secondStr = String(secs).padStart(2, '0');

  heading.innerText = `Time Remaining: ${minuteStr}:${secondStr}`; 
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
