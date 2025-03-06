let countdown;
let timeRemaining;

function setAlarm() {
  timeRemaining = parseInt(document.getElementById("alarmSet").value, 10);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please set a valid time.");
    return;
  }

  updateTimeDisplay(timeRemaining);

  countdown = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(countdown);
      playAlarm();
    } else {
      timeRemaining--;
      updateTimeDisplay(timeRemaining);
    }
  }, 1000);
}

function updateTimeDisplay(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${seconds}`;
}

var audio = new Audio("alarmsound.mp3");

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(countdown);
    updateTimeDisplay(0);
  });
}

window.onload = setup;
