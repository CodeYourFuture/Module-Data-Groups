let countdown;

function updateTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function alarmFinished() {
  document.body.style.backgroundColor = "#f4cccc";
  playAlarm();
}

function setAlarm() {
  let secondsRemaining = document.getElementById("alarmSet").valueAsNumber;

  if (!Number.isInteger(secondsRemaining) || secondsRemaining < 0) {
    return;
  }

  window.clearInterval(countdown);
  updateTime(secondsRemaining);

  if (secondsRemaining === 0) {
    return;
  }

  countdown = window.setInterval(() => {
    secondsRemaining -= 1;
    updateTime(secondsRemaining);

    if (secondsRemaining === 0) {
      window.clearInterval(countdown);
      countdown = undefined;
      alarmFinished();
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
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
