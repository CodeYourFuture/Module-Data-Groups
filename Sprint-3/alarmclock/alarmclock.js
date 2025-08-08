let timer;
let secondsRemaining = 0;

function setAlarm() {
  // Clear existing timer if any
  if (timer) {
    clearInterval(timer);
  }
  
  // Get the time from the input field
  const alarmInput = document.getElementById("alarmSet");
  secondsRemaining = parseInt(alarmInput.value, 10);
  
  // Update the display immediately
  updateTimeDisplay();
  
  // Start the timer
  timer = setInterval(function() {
    secondsRemaining--;
    
    // Update the display
    updateTimeDisplay();
    
    // Check if time is up
    if (secondsRemaining <= 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

function updateTimeDisplay() {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  
  // Format with leading zeros
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  // Update the display
  document.getElementById("timeRemaining").innerText = 
    `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
