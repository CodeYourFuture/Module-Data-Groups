let intervalId;
let currentTime = 0; // Store the remaining time for pause/resume

function setAlarm() {
  currentTime = parseInt(document.getElementById("alarmSet").value);
  if (isNaN(currentTime) || currentTime <= 0) return;

  updateTimeDisplay();

  intervalId = setInterval(() => {
    currentTime--;
    updateTimeDisplay();

    if (currentTime <= 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

function updateTimeDisplay() {
  let minutes = String(Math.floor(currentTime / 60)).padStart(2, '0');
  let seconds = String(currentTime % 60).padStart(2, '0');
  document.getElementById("timeRemaining").innerText = `Time Remaining: ${minutes}:${seconds}`;
}

function stopAlarm() {
  clearInterval(intervalId);        // Stop the countdown
  currentTime = 0;                  // Reset time
  updateTimeDisplay();             // Update display to 00:00
  audio.pause();                   // Stop alarm sound
  audio.currentTime = 0;           // Reset sound to start
  document.body.style.backgroundColor = ""; // Reset background
}

function pauseAlarm() {
  clearInterval(intervalId);
  audio.pause();
  audio.currentTime = 0; // Rewind
  document.body.style.backgroundColor = ""; // Reset background
}

function resetAlarm() {
  clearInterval(intervalId);
  currentTime = 0;
  updateTimeDisplay();
  audio.pause();
  audio.currentTime = 0;
  document.body.style.backgroundColor = "";
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("reset").addEventListener("click", () => {
    resetAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
  document.body.style.backgroundColor = "red"; // Change background
}




window.onload = setup;
