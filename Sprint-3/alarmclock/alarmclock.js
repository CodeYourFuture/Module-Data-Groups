// DOM elements
const setAlarmBtn = document.getElementById("set");
const stopAlarmBtn = document.getElementById("stop");
const timeRemaining = document.getElementById("timeRemaining");
let alarmInterval;
let totalSeconds;

// reset function - returns app to clean initial state
function resetAlarm() {
  // Clear any running interval
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }

  function resetToInitialState() {
    totalSeconds = 0;
    timeRemaining.innerText = "Time Remaining: 00:00";
    document.getElementById("alarmSet").value = "";
    stopAlarmBtn.style.display = "none";
    setAlarmBtn.style.display = "inline-block"; // ADD THIS - show set button
  }

  function stopSound() {
    if (typeof pauseAlarm === "function") {
      pauseAlarm();
    }
  }
  resetToInitialState();
  stopSound();
}

// Set Alarm function
function setAlarm() {
  const input = document.getElementById("alarmSet");
  const timeValue = parseInt(input.value);
  const hasActiveTimer = alarmInterval !== null;

  function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timeRemaining.innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function startTimer() {
    alarmInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
        if (totalSeconds === 0) {
          clearInterval(alarmInterval);
          alarmInterval = null;

          // WHEN ALARM STARTS: hide set button, show only stop button
          setAlarmBtn.style.display = "none";
          stopAlarmBtn.style.display = "inline-block";

          playAlarm();
        }
      }
    }, 1000);
  }

  resetAlarm();

  if (isNaN(timeValue) || timeValue <= 0) {
    if (!hasActiveTimer) alert("Please enter a number greater than 0");
    return;
  }

  totalSeconds = timeValue;
  stopAlarmBtn.style.display = "inline-block";
  setAlarmBtn.style.display = "inline-block"; // Ensure set button is visible
  updateDisplay();
  startTimer();
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  // Ensure clean initial state when page loads
  resetAlarm();

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    resetAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
