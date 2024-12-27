let timerId = null;
let remainingTime;
let isPaused = false;

function startTimer() {
  clearInterval(timerId);
  isPaused = false;
  timerId = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay(remainingTime);
      if (remainingTime === 0) {
        clearInterval(timerId);
        timerId = null;
        playAlarm();
      }
    }
  }, 1000);
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const totalSeconds = +input.value;

  // Stricter input validation
  if (!input.value.match(/^[+]?\d*\.?\d{0,2}$/) || totalSeconds <= 0) {
    alert("Please enter a valid positive number");
    return;
  }

  remainingTime = totalSeconds;
  updateDisplay(remainingTime);

  // Reset background color when starting new timer
  const centre = document.querySelector(".centre");
  centre.style.backgroundColor = ""; // Reset to default

  startTimer();
}

function pauseAlarm() {
  audio.pause();
  clearInterval(timerId);
  timerId = null;
  isPaused = true;
}

function resumeAlarm() {
  if (remainingTime > 0 && isPaused) {
    startTimer();
  }
}

function updateDisplay(seconds) {
  const timeRemainingDisplay = document.getElementById("timeRemaining");
  const centre = document.querySelector(".centre");
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timeRemainingDisplay.textContent = `Time Remaining: ${String(
    minutes
  ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  if (seconds <= 0) {
    // Change the background color when the timer finishes
    centre.style.backgroundColor = "red";
    timeRemainingDisplay.textContent = "Time's up!";
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
  document.getElementById("resume").addEventListener("click", () => {
    resumeAlarm();
  });
}

function playAlarm() {
  audio.play();
}

window.onload = setup;
