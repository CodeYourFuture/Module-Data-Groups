let timerId;
let remainingTime;
function startTimer() {
  clearInterval(timerId); // Clear any existing interval
  timerId = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateDisplay(remainingTime);
    } else {
      clearInterval(timerId);
      playAlarm();
    }
  }, 1000);
}
function setAlarm() {
  const input = document.getElementById("alarmSet");
  const totalSeconds = +input.value;

  // Validate input
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    alert("Please enter a valid positive number");
    return;
  }

  remainingTime = totalSeconds;
  updateDisplay(remainingTime);

  startTimer();
}

function resumeAlarm() {
  if (remainingTime > 0) {
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

function pauseAlarm() {
  audio.pause();
  clearInterval(timerId);
}

window.onload = setup;
