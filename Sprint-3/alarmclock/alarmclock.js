let countdown;
let remainingTime = 0;

function setAlarm() {

  // Get input value in seconds
  const input = document.getElementById("alarmSet").value;
  remainingTime = parseInt(input, 0);

  // If input is invalid or zero, do nothing
  if (isNaN(remainingTime) || remainingTime <= 0) return;

  // Clear any existing interval
  clearInterval(countdown);

  // Update display immediately
  updateDisplay(remainingTime);

  // Start countdown
  countdown = setInterval(() => {
    remainingTime--;
    updateDisplay(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}
}

//this fuction called when (when set alarm or clicked the set button

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
