//function setAlarm() {}

let countdownInterval;

function setAlarm() {
  // 1. Get the input value and the display element
  const alarmInput = document.getElementById("alarmSet").value;
  const timeRemainingDisplay = document.getElementById("timeRemaining");

  // Safety check: Ensure input is a number and greater than 0
  if (!alarmInput || alarmInput <= 0) return;

  let timeRemaining = parseInt(alarmInput);

  // 2. Clear any existing timers to prevent "speeding up" if clicked multiple times
  clearInterval(countdownInterval);

  // 3. Initial update so the user sees the time immediately
  updateDisplay(timeRemaining, timeRemainingDisplay);

  // 4. Start the countdown logic
  countdownInterval = setInterval(() => {
    timeRemaining -= 1;
    updateDisplay(timeRemaining, timeRemainingDisplay);

    // 5. Trigger the alarm and stop the counter when 0 is reached
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
    }
  }, 1000);
}

/**
 * Helper function to format the time as 00:00
 */
function updateDisplay(totalSeconds, displayElement) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Converts numbers to strings and pads with a leading zero if needed
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  displayElement.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
