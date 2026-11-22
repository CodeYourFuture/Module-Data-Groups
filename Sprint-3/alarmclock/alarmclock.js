let countdownInterval = null;

function setAlarm() {
  const timeDisplay = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  const inputValue = alarmInput.value.trim();

  if (inputValue === "") {
    return;
  }

  let secondsRemaining = Number(inputValue);

  if (!Number.isFinite(secondsRemaining) || secondsRemaining < 0) {
    return;
  }

  if (countdownInterval !== null) {
    window.clearInterval(countdownInterval);
    countdownInterval = null;
  }

  const updateDisplay = () => {
    const minutes = Math.floor(secondsRemaining / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (secondsRemaining % 60).toString().padStart(2, "0");
    timeDisplay.textContent = `Time Remaining: ${minutes}:${seconds}`;
  };

  updateDisplay();

  if (secondsRemaining === 0) {
    playAlarm();
    return;
  }

  countdownInterval = window.setInterval(() => {
    secondsRemaining -= 1;
    updateDisplay();

    if (secondsRemaining === 0) {
      window.clearInterval(countdownInterval);
      countdownInterval = null;
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
  document.body.classList.add("alarm-active");
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  document.body.classList.remove("alarm-active");
}

window.onload = setup;
