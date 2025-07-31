const timeSetup = document.querySelector("#alarmSet");
const timeCountdown = document.querySelector("#timeRemaining");
let countdownInterval;

// Shared display update function
function updateDisplay(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timeCountdown.innerText = `Time Remaining: ${minutes}:${secs}`;
}


function parsePositiveInteger(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();

  // Check if it's all digits (no letters or symbols)
  if (!/^\d+$/.test(trimmed)) return null;

  const num = Number(trimmed);
  return num > 0 ? num : null;
}

function setAlarm() {
  const totalSeconds = parsePositiveInteger(timeSetup.value);

  if (totalSeconds === null) {
    timeCountdown.innerText = "Please enter a valid number of seconds.";
    document.body.style.backgroundColor = "";
    return;
  }
   
  startCountdown(totalSeconds); // Start the countdown timer
  document.body.style.backgroundColor = "";
  
}

function startCountdown(totalSeconds) {
  clearInterval(countdownInterval); // Stop previous countdown
  updateDisplay(totalSeconds);      // Show first tick immediately

  countdownInterval = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      timeCountdown.innerText = "Time's up!";
      document.body.style.backgroundColor = "#ff4c4c";
      playAlarm();
      return;
    }

    updateDisplay(totalSeconds);
  }, 1000);
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
  setAlarm();  // Sets the initial time display
  //startCountdown(); // Starts the actual countdown
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play(); // Play the alarm sound
}

function pauseAlarm() {
  audio.pause();  // Stop the alarm sound
}

window.onload = setup;