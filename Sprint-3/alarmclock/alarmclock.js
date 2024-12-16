function setAlarm() {}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
let countdown;
window.onload = setup;let timeRemaining = 0;

function setAlarm() {  // Get the time from the input field
  timeRemaining = parseInt(document.getElementById("alarmInput").value);

  // If time is valid, start the countdown
  if (!isNaN(timeRemaining) && timeRemaining > 0) {
    // Update the time display immediately
    document.getElementById("timeRemaining").textContent = formatTime(timeRemaining);

    // Start the countdown every second
    countdown = setInterval(() => {
      timeRemaining--;
      document.getElementById("timeRemaining").textContent = formatTime(timeRemaining);

      if (timeRemaining === 0) {
        clearInterval(countdown); // Stop the countdown
        playAlarm(); // Play the alarm
      }
    }, 1000);
  }
}


function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0; // Reset sound to start
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function setup() {
  // Event listeners for Set Alarm and Stop Alarm buttons
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

window.onload = setup;
