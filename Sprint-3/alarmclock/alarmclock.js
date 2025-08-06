function setAlarm() {
  // Get the input value
  let time = parseInt(document.getElementById("alarmSet").value) || 0;

  // Check for negative numbers (not required by spec)
  // if (time < 0) {
  //   document.getElementById("timeRemaining").textContent =
  //     "Time Remaining: 00:00";
  //   return; // Exit the function if the input is negative
  // }

  // Clear any existing interval
  if (window.alarmInterval) {
    clearInterval(window.alarmInterval);
  }

  // Do countdown
  window.alarmInterval = setInterval(function() {
    // Decrement time first
    time--;
    
    // Check if time is up
    if (time <= 0) {
      clearInterval(window.alarmInterval);
      document.getElementById("timeRemaining").textContent = 
        "Time Remaining: 00:00";
      playAlarm();
      return;
    }
    
    // Update display AFTER checking
    document.getElementById("timeRemaining").textContent = 
      "Time Remaining: " + formatTime(time);
  }, 1000);
}

// Helper function to format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${pad(minutes)}:${pad(remainingSeconds)}`;
}

// Helper function to pad single digits with leading zero
function pad(num) {
  return num < 10 ? `0${num}` : num;
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
