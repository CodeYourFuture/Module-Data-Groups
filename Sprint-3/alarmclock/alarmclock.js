let intervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  const value = Number(input.value);
  if (!Number.isInteger(value) || value <= 0) {
    alert("Please enter a positive whole number of seconds.");
    return;
  }

  resetAlarm();

  let remainingSeconds = value;
  updateDisplay(remainingSeconds);

  intervalId = setInterval(() => {
    remainingSeconds -= 1;

    if (remainingSeconds > 0) {
      updateDisplay(remainingSeconds);
    } else {
      updateDisplay(0);
      clearInterval(intervalId);
      playAlarm();
      setFlashingBackground(true);
    }
  }, 1000);
}

function resetAlarm() {
  clearInterval(intervalId);
  intervalId = null;
  updateDisplay(0);
  setFlashingBackground(false);
}

function updateDisplay(seconds) {
  const heading = document.getElementById("timeRemaining");
  heading.innerText = `Time Remaining: ${formatTime(seconds)}`;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}`;
}

function setFlashingBackground(isFlashing) {
  if (isFlashing) {
    document.body.classList.add("flash");
  } else {
    document.body.classList.remove("flash");
  }
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
