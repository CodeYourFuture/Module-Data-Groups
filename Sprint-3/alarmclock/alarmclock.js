let timeRemainingEl = null;

// Keep track of active timer
let intervalId = null;

// Turns a number of seconds into "MM:SS" format
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(remainingSeconds).padStart(2, "0");

  return mm + ":" + ss;
}

function setAlarm() {
  let seconds = Number(document.getElementById("alarmSet").value);

  // Validation
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid positive number of seconds.");
    return;
  }

  seconds = Math.floor(seconds);

  if (!timeRemainingEl) {
    timeRemainingEl = document.getElementById("timeRemaining");
  }

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  timeRemainingEl.innerText = "Time Remaining: " + formatTime(seconds);

  intervalId = setInterval(function () {
    seconds = seconds - 1;

    timeRemainingEl.innerText = "Time Remaining: " + formatTime(seconds);

    if (seconds === 0) {
      clearInterval(intervalId);
      intervalId = null;
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
