timerInterval = null;
function setAlarm() {
  // 1. Get the input from the user
  const inputField = document.getElementById("alarmSet");
  let timeRemaining = parseInt(inputField.value);

  // 2. Validate: If no number or 0 is entered, do nothing
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    return;
  }

  // 3. Clear any existing timer; prevent multiple alarms running at once
  clearInterval(timerInterval);

  // 4. Update the display immediately
  updateTimeDisplay(timeRemaining);

  // 5. Start the countdown
  timerInterval = setInterval(() => {
    timeRemaining -= 1;

    updateTimeDisplay(timeRemaining);

    // 6. Check if timer hit zero
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      playAlarm();
      document.body.style.backgroundColor = "red";
    }
  }, 1000);
}

// mm:ss formatting

//00:00 format

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
