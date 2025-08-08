let countdownInterval; 
let timeRemaining = 0; 

function setAlarm(){
  pauseAlarm();
  audio.currentTime = 0
  clearInterval(countdownInterval);
 const inputField = document.getElementById("alarmSet");
  timeRemaining = parseInt(inputField.value, 10);

 if (isNaN(timeRemaining) || timeRemaining <= 0) {
  alert("Please enter a valid number greater than 0.");
  return;
  }

  updateTimerDisplay();
  countdownInterval = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      playAlarm(); 
    }
      updateTimerDisplay();

  }, 1000);
}

function updateTimerDisplay() {
  const title = document.getElementById("timeRemaining");
  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const seconds = String(timeRemaining % 60).padStart(2, "0");
  title.textContent = `Time Remaining: ${minutes}:${seconds}`;
}




// DO NOT EDIT BELOW HERE





