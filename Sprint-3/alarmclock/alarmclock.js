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

  updateDisplay(remainingTime);

  timerInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      updateDisplay(0);
      playAlarm();
      return;
    }

    remainingTime--;
    updateDisplay(remainingTime);
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
