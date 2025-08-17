//this variable holds the time independent of the function
let Timer = null;

function setAlarm() {
  //this pulls the set time from whatever is entered as input on the html page
  let inputValue = document.getElementById("alarmSet").value;

  let remainingTime = Number(inputValue);
  
  if (isNaN(remainingTime) || remainingTime <= 0) {
    return;
  }

  //Time on screen in MM:SS format
  updateTimerDisplay(remainingTime);
  
  if (Timer !== null) {
    clearInterval(Timer);
  }
  
  Timer = setInterval(function () {
    remainingTime = remainingTime - 1; //timer is reduced by 1 second
    
    updateTimerDisplay(remainingTime); //then updated

    // When timer hits zero, stop timer and play alarm
    if (remainingTime <= 0) {
      clearInterval(Timer);
      playAlarm();
    }
  }, 1000);
}


function updateTimerDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  // Puts the figures in strings and in a clock-like format
  let minuteStr = String(minutes).padStart(2, "0");
  let secondStr = String(secs).padStart(2, "0");

  // Update the heading text
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minuteStr}:${secondStr}`;

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
