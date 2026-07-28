let countdownInterval = null;
function setAlarm() {
  const input = document.getElementById("alarmSet");
  let totalSeconds = parseInt(input.value, 10);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    return;
  }

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  const heading = document.getElementById("timeRemaining");

  function updateDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remSeconds).padStart(2, "0");

    heading.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
  }

  // Set initial display immediately when button is pressed
  updateDisplay(totalSeconds);

  // Start 1000ms interval countdown
  countdownInterval = setInterval(() => {
    totalSeconds--;
    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
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
