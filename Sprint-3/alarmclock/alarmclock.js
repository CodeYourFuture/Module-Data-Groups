let timer;
let secondsRemaining = 0;

function setAlarm() {
  if (timer) {
    clearInterval(timer);
  }
  
  const alarmInput = document.getElementById("alarmSet");
  const inputValue = parseInt(alarmInput.value, 10);
  
  if (isNaN(inputValue) || inputValue <= 0) {
    alert("Please enter a valid positive number of seconds");
    return;
  }
  
  secondsRemaining = inputValue;
  
  updateTimeDisplay();
  
  timer = setInterval(function() {
    secondsRemaining--;
    
    updateTimeDisplay();
    
    if (secondsRemaining <= 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

function updateTimeDisplay() {
  if (isNaN(secondsRemaining) || secondsRemaining < 0) {
    document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
    return;
  }
  
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
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
