let countdown = null; 

function setAlarm() {
  let secondsLeft = parseInt(document.getElementById("alarmSet").value, 10); 
  const timeDisplay = document.getElementById("timeRemaining"); 

  if (isNaN(secondsLeft) || secondsLeft <= 0) { 
    timeDisplay.innerText = "Time Remaining: 00:00";
    return;
  }

  if (countdown !== null) { 
    clearInterval(countdown);
  }

  const updateDisplay = (time) => { 
    let minutes = Math.floor(time / 60).toString().padStart(2, "0"); 
    let seconds = (time % 60).toString().padStart(2, "0"); 
    timeDisplay.innerText = "Time Remaining: " + minutes + ":" + seconds; 
  };

  updateDisplay(secondsLeft); 

  countdown = setInterval(() => { 
    secondsLeft = secondsLeft - 1; 
    updateDisplay(secondsLeft); 

    if (secondsLeft <= 0) { 
      clearInterval(countdown); 
      countdown = null; 
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