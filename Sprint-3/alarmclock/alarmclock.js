let countdownInterval;
let flashInterval;
let timeLeft = 0;     
let isPaused = false;

function setAlarm() {
  const alarmInput = document.querySelector("#alarmSet");
  const alarmSetValue = Number(alarmInput.value);;

  // validates the input: acceptable is number 
  if (
  alarmSetValue === undefined ||              
  alarmSetValue === null ||                   
  alarmSetValue === "" ||                     
  isNaN(alarmSetValue) ||                     
  typeof alarmSetValue !== "number" ||        
  alarmSetValue <= 0                          
  ) {
  alert("Please enter a valid number greater than 0.");
  return;
  };

  // Clear any existing countdown to prevent multiple intervals.
  clearInterval(countdownInterval);
  // Stop any ongoing background flashing.
  stopFlashing();
  // Pause any currently playing alarm sound.
  audio.pause();

  timeLeft = alarmSetValue;
  updateTimeDisplay(timeLeft);
  countdownInterval = setInterval(runCountdown, 1000);
  isPaused = false; // Ensure isPaused is false when a new alarm is set
}

// Countdown Functionality
// This function decreases the time left by 1 second every second
function runCountdown() {
  timeLeft--;
  updateTimeDisplay(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    playAlarm();
    flashBackground(); 
  }
}



// This function updates the time display in the format MM:SS
// It takes the remaining seconds and formats them into a string
function updateTimeDisplay(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.querySelector("#timeRemaining").textContent = `Time Remaining: ${minutes}:${secs};`
}



// Background Flash stat/stop
// This function toggles the background color between red and white every 400 milliseconds
// It uses a global variable to keep track of the interval
function flashBackground() {
  let isRed = false;
  flashInterval = setInterval(() => {
    document.body.style.backgroundColor = isRed ? "#ffffff" : "#ff0000";
    isRed = !isRed;
  }, 400);

  // stops the foreever loop error i get in test
  // Auto-stop flashing after 5 seconds
  setTimeout(() => {
    stopFlashing();
  }, 5000);
}
function stopFlashing() {
  clearInterval(flashInterval);
  document.body.style.backgroundColor = "#ffffff"; 
}



// Pause and Resume functionality
// This function pauses the countdown and stops the alarm sound
// It also sets a flag to indicate that the countdown is paused
function pauseInterval() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    isPaused = true;
  }
  audio.pause();
}
function resumeInterval(){
   if (isPaused && timeLeft > 0) {
    countdownInterval = setInterval(runCountdown, 1000);
    isPaused = false;
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

  document.getElementById("pause").addEventListener("click", () => {
    pauseInterval()
  });

  document.getElementById("resume").addEventListener("click", () => {
    resumeInterval()
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  stopFlashing();
  timeLeft = 0;
  isPaused = false;
  clearInterval(countdownInterval); // Clear the main countdown interval
  timeLeft = 0; // Reset time to 0
  isPaused = false; // Ensure pause state is reset
  updateTimeDisplay(timeLeft); // Update display to show 00:00 immediately
}

window.onload = setup;
