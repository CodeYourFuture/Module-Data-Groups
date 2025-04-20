
function setAlarm() {
  const alarmInput = document.getElementById("alarmSet");
  const timeRemainingDisplay = document.getElementById("timeRemaining"); 
  document.body.style.backgroundColor = " #ffffff";
  
  if (!alarmInput || !timeRemainingDisplay) {
    console.error("Input or display element not found.");
    return;
  }

  let timeLeft = parseInt(alarmInput.value);

  if (isNaN(timeLeft) || timeLeft < 0) {
    alert("Please enter a valid positive number for the alarm time (in seconds).");
    return;
  }

  if (window.intervalId) {
    clearInterval(window.intervalId);
  }

  function updateDisplay() {
    if (timeLeft <= 0) {
      clearInterval(window.intervalId); 
      timeRemainingDisplay.textContent = "Time Remaining: 00:00";
      playAlarm();
      
    
      document.body.style.backgroundColor = "green";
        
      return;
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeRemainingDisplay.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    
    timeLeft--; 
  }

  updateDisplay(); 
  window.intervalId = setInterval(updateDisplay, 1000);
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
  document.body.style.backgroundColor = " #ffffff";
}

window.onload = setup;
