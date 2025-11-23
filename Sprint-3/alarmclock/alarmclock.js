// Keep track of the countdown
let countdownId = null;
let remainingSeconds = 0;

// Turn seconds into "mm:ss"
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");

  return `${minutesString}:${secondsString}`;
}

// Update the text at the top: "Time Remaining: mm:ss"
function updateTimeDisplay() {
  const titleElement = document.getElementById("timeRemaining");
  if (!titleElement) return; // safety check

  titleElement.textContent = `Time Remaining: ${formatTime(remainingSeconds)}`;
}

// Called when you click the "Set Alarm" button
function setAlarm() {
  const input = document.getElementById("alarmSet");
  if (!input) return;

  const seconds = Number(input.value);


  // Ignore invalid or non-positive numbers
  if (Number.isNaN(seconds) || seconds <= 0) {
    return;
  }

  // If a countdown is already running, stop it first
  if (countdownId !== null) {
    clearInterval(countdownId);
    countdownId = null;
  }

  remainingSeconds = seconds;
  updateTimeDisplay();

  // Start a new countdown
  countdownId = setInterval(() => {
    remainingSeconds -= 1;
    updateTimeDisplay();

    if (remainingSeconds <= 0) {
      // Make sure we end at 00:00
      remainingSeconds = 0;
      updateTimeDisplay();
document.body.style.backgroundColor = "red";
      // Stop the interval
      clearInterval(countdownId);
      countdownId = null;

      // Play the alarm sound
      playAlarm();
      
    }
  }, 1000);
}

// Called when you click the "Stop Alarm" button
function stopAlarm() {
  // Stop the countdown if it is running
  if (countdownId !== null) {

    clearInterval(countdownId);
    countdownId = null;
   
  }

  // Reset the time to 0 and update the display
  remainingSeconds = 0;
  updateTimeDisplay();

  // Try to stop the audio (this assumes there is an <audio id="alarmAudio">)
  const audio = document.getElementById("alarmAudio");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
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
