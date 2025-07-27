let remainingTime = 0;
let countdownInterval;

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function updateDisplay() {
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(remainingTime)}`;
}

function setAlarm() {
  pauseAlarm();
  audio.currentTime = 0;

  const input = document.getElementById("alarmSet");
  const seconds = parseInt(input.value, 10);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  
  remainingTime = seconds;
  updateDisplay(); 

  clearInterval(countdownInterval); // clear any previous countdown
  countdownInterval = setInterval(() => {
    remainingTime--;
    updateDisplay();

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(); 
      playAlarm();
    }
  }, 1000);
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
