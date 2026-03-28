let timerInterval = null;
let currentTime = 0;

function setAlarm() {
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  // Get the input value
  const input = document.getElementById("alarmSet");
  let totalSeconds = parseInt(input.value);
  
  // Validate input (if empty or invalid, default to 0)
  if (isNaN(totalSeconds)) {
    totalSeconds = 0;
  }
  
  currentTime = totalSeconds;
  
  // Update the display
  updateTimeDisplay(currentTime);
  
  // Start the countdown
  timerInterval = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateTimeDisplay(currentTime);
      
      // Check if timer reached zero
      if (currentTime === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        playAlarm();
        // Change background color
        document.body.style.backgroundColor = "red";
      }
    }
  }, 1000);
}

function updateTimeDisplay(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  const heading = document.getElementById("timeRemaining");
  heading.textContent = `Time Remaining: ${formattedTime}`;
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
  // Play continuously by looping
  audio.loop = true;
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
  // Reset background color when alarm is stopped
  document.body.style.backgroundColor = "";
  
  // Clear any ongoing timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  // Reset display to 00:00
  currentTime = 0;
  updateTimeDisplay(0);
}

window.onload = setup;
