let countdownInterval = null;

function setAlarm() {
  const inputEl = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let totalSeconds = parseInt(inputEl.value, 10);

  if (isNaN(totalSeconds) || totalSeconds < 0) return;

  // Clear any existing timer so they don't overlap
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Initial render
  updateDisplay(heading, totalSeconds);

  countdownInterval = setInterval(() => {
    totalSeconds--;

    if (totalSeconds >= 0) {
      updateDisplay(heading, totalSeconds);
    }

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
      // Optional: change background color when reaching zero
      document.body.style.backgroundColor = "pink";
    }
  }, 1000);
}

function updateDisplay(heading, seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  heading.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
