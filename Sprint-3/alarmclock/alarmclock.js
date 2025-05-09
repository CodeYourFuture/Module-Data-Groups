function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  let timeLeft = parseInt(inputField.value);

  function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timeRemaining.textContent = `Time Remaining: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  }

  updateTimerDisplay(timeLeft);

  const countdown = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timeLeft = 0;
      playAlarm();
    }

    updateTimerDisplay(timeLeft);
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdown);
    pauseAlarm();
  });
}

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
