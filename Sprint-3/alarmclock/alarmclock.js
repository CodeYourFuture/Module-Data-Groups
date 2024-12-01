function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  let timeRemaining = parseInt(inputField.value, 10);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid positive number!");
    return;
  }

  const timeDisplay = document.getElementById("timeRemaining");
  let interval;

  function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeDisplay.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  function countdown() {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateDisplay();
    } else {
      clearInterval(interval);
      timeDisplay.style.backgroundColor = "red";
      playAlarm();
    }
  }

  updateDisplay();
  interval = setInterval(countdown, 1000);

  // Stop the alarm and reset background on "Stop Alarm" click
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    timeDisplay.style.backgroundColor = ""; // Reset background color
    pauseAlarm();
  });
}
module.exports=setAlarm;

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
