let timerInterval = null;

function updateDisplay(time) {
  const heading = document.getElementById("timeRemaining");
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  heading.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setAlarm() {
  clearInterval(timerInterval);

  const time = document.getElementById("alarmSet").value;
  let remainingTime = Number(time);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    updateDisplay(0);
    return;
  }

  updateDisplay(remainingTime);

  timerInterval = setInterval(() => {
    remainingTime--;
    updateDisplay(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
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
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
