let countdown = null;

function updateDisplay(time) {
  const timeDisplay = document.getElementById("timeRemaining");
  let minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  let seconds = (time % 60).toString().padStart(2, "0");
  timeDisplay.innerText = "Time Remaining: " + minutes + ":" + seconds;
}

function resetAlarm() {
  if (countdown !== null) {
    clearInterval(countdown);
    countdown = null;
  }

  pauseAlarm();
  audio.currentTime = 0;
  updateDisplay(0);
}

function setAlarm() {
  resetAlarm();

  let secondsLeft = parseInt(document.getElementById("alarmSet").value, 10);

  if (isNaN(secondsLeft) || secondsLeft <= 0) {
    updateDisplay(0);
    return;
  }

  updateDisplay(secondsLeft);

  countdown = setInterval(() => {
    secondsLeft = secondsLeft - 1;
    updateDisplay(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      countdown = null;
      playAlarm();
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
    pauseAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    if (countdown !== null) {
      clearInterval(countdown);
      countdown = null;
    }
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;