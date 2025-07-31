timeSetup = document.querySelector("#alarmSet"); // Access to alarmset

timeCountdown = document.querySelector("#timeRemaining"); // Access to timeRemaining

let countdownInterval; // Variable to setup to 0 the countdown


function setAlarm() {
  const rawInput = timeSetup.value.trim(); // Remove surrounding spaces
  const totalSeconds = parseInt(rawInput, 10);

  // Validate the input
  if (isNaN(totalSeconds) || totalSeconds < 0) {
    timeCountdown.innerText = "Please enter a valid number of seconds.";
    document.body.style.backgroundColor = "";
    return;
  }

  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  timeCountdown.innerText = `Time Remaining: ${minutes}:${seconds}`;
  document.body.style.backgroundColor = ""; // Reset background
}


function startCountdown() {
  let totalSeconds = parseInt(timeSetup.value, 10);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    timeCountdown.innerText = "Time Remaining: 00:00";
    return;
  }

  clearInterval(countdownInterval); // Stop previous countdown

  const updateDisplay = () => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    timeCountdown.innerText = `Time Remaining: ${minutes}:${seconds}`;
  };

  updateDisplay(); // Show first tick immediately

  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      timeCountdown.innerText = "Time's up!";
      document.body.style.backgroundColor = "#ff4c4c";
      playAlarm();
      return;
    }

    totalSeconds--; // Decrement only after the check
    updateDisplay();
  }, 1000);
}



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
  setAlarm();  // Sets the initial time display
  startCountdown(); // Starts the actual countdown
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play(); // Play the alarm sound
}

function pauseAlarm() {
  audio.pause();  // Stop the alarm sound
}

window.onload = setup;

