// DOM elements
const setAlarmBtn = document.getElementById("set");
const stopAlarmBtn = document.getElementById("stop");
const timeRemaining = document.getElementById("timeRemaining");
let alarmInterval;

// Update Display function;
function updateDisplay(secondsValue) {
  let minutes = Math.floor(secondsValue / 60);
  let seconds = secondsValue % 60;
  timeRemaining.innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// reset function - returns app to clean initial state
function resetAlarm() {
  function resetToInitialState() {
    updateDisplay(0);
    document.getElementById("alarmSet").value = "";
    stopAlarmBtn.style.display = "none";
    setAlarmBtn.style.display = "inline-block"; // ADD THIS - show set button
  }

  function stopSound() {
    if (typeof pauseAlarm === "function") {
      pauseAlarm();
    }
  }
  // Clear any running interval
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }

  resetToInitialState();
  stopSound();
}

// Set Alarm function
function setAlarm() {
  let totalSeconds;
  const input = document.getElementById("alarmSet");
  const timeValue = parseInt(input.value);
  const hasActiveTimer = alarmInterval !== null;

  function startTimer() {
    alarmInterval = setInterval(() => {
      totalSeconds--;
      updateDisplay(totalSeconds);
      if (totalSeconds === 0) {
        clearInterval(alarmInterval);
        alarmInterval = null;

        // WHEN ALARM STARTS: hide set button, show only stop button
        setAlarmBtn.style.display = "none";
        stopAlarmBtn.style.display = "inline-block";

        playAlarm();
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
  updateDisplay(totalSeconds);
  startTimer();
}

document.getElementById("stop").addEventListener("click", () => {
  pauseAlarm();
  resetAlarm();
});

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  // Ensure clean initial state when page loads
  resetAlarm();

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
