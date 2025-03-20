function setAlarm() {
  let timeRemaining = parseInt(document.getElementById("alarmSet").value);

  // If input is not a number or is less than 1, do nothing
  if (isNaN(timeRemaining) || timeRemaining < 1) {
    alert("Please enter a valid time.");
    return;
  }

  
  updateTimeDisplay(timeRemaining); //update time display

   
  let countdown = setInterval(() => { // Start the countdown timer
    timeRemaining--;

    
    updateTimeDisplay(timeRemaining);// Update the displayed time

   
    if (timeRemaining == 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}
function updateTimeDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  
  let formattedTime = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
// Format time as(e.g., 00:09)
  document.getElementById("timeRemaining").innerText = formattedTime;
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("./alarmsound.mp3");

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
