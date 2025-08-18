let alarmInterval;
let timeRemaining = 0;

function setAlarm() {
  // Get the input value
  const alarmInput = document.getElementById("alarmSet");
  const seconds = parseInt(alarmInput.value);
  
  // Validate input
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds!");
    return;
  }
  
  // Clear any existing interval
  if (alarmInterval) {
    clearInterval(alarmInterval);
  }
  
  audio.pause();
  audio.currentTime = 0;

  // Set the time remaining
  timeRemaining = seconds;
  
  // Update the display immediately
  updateDisplay();
  
  // Start the countdown
  alarmInterval = setInterval(() => {
    timeRemaining--;
    updateDisplay();
    
    // Check if time is up
    if (timeRemaining <= 0) {
      clearInterval(alarmInterval);
      playAlarm();
      alarmInput.value = "";
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  
  // Format with leading zeros
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Update the display
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formattedTime}`;
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
