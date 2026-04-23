let countdown = null;

function resetAlarm() {
  clearInterval(countdown);
  countdown = null;
  pauseAlarm();
  updateHeading(0);
}

function showError(message) {
  const heading = document.getElementById("timeRemaining");
  heading.innerText = message;
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let time = Number(input.value);

  resetAlarm();

  if (isNaN(time) || time < 0 || !Number.isInteger(time)) {
    showError("Please enter a whole number of seconds.");
    return;
  }

  if (time === 0) {
    updateHeading(0);
    playAlarm();
    return;
  }

  updateHeading(time);

  countdown = setInterval(() => {
    time--;

    if (time <= 0) {
      updateHeading(0);
      clearInterval(countdown);
      playAlarm();
    } else {
      updateHeading(time);
    }
  }, 1000);
}

function updateHeading(time) {
  const heading = document.getElementById("timeRemaining");

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  heading.innerText = `Time Remaining: ${mm}:${ss}`;
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
