let currentIntervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let secondsRemaining = Number(input.value);

  if (!secondsRemaining || secondsRemaining <= 0) {
    heading.innerText = "Please enter a number of seconds greater than 0";
    return;
  }

  function updateDisplay() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    heading.innerText = Time Remaining: ${paddedMinutes}:${paddedSeconds};
  }

  updateDisplay();

  if (currentIntervalId !== null) {
    clearInterval(currentIntervalId);
  }

  currentIntervalId = setInterval(() => {
    secondsRemaining--;
    updateDisplay();

    if (secondsRemaining <= 0) {
      clearInterval(currentIntervalId);
      currentIntervalId = null;
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

