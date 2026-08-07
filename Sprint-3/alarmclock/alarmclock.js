// This variable will store the interval so we can stop it later
let flashInterval;

// This function makes the background flash red and white
function startFlashing() {
  let isRed = false; // keeps track of which color we should show

  flashInterval = setInterval(function () {
    if (isRed) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "red";
    }

    // Switch the color for next time
    isRed = !isRed;
  }, 500); // run every half second
}

// This function stops the flashing and resets the background
function stopFlashing() {
  clearInterval(flashInterval); // stop the flashing interval
  document.body.style.backgroundColor = "white"; // reset background
}

function setAlarm() {
  // get the value of the input
  const input = document.getElementById("alarmSet").value;

  // If nothing was typed, exit the function
  if (!input) {
    return;
  }

  let totalSeconds;

  // If the user typed something like "2:21"
  if (input.includes(":")) {
    // Split into minutes and seconds
    const parts = input.split(":");
    const minutes = Number(parts[0]);
    const seconds = Number(parts[1]);

    // Convert everything into total seconds
    totalSeconds = minutes * 60 + seconds;
  } else {
    // Otherwise treat the input as normal seconds
    totalSeconds = Number(input);
  }

  // This is the countdown number that will go down every second
  let timeLeft = totalSeconds;

  // If a previous timer was running, stop it
  if (window.countdownTimer) {
    clearInterval(window.countdownTimer);
  }

  // A simple helper to turn seconds into MM:SS format
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    // Make sure both numbers always have two digits
    const paddedMins = String(mins).padStart(2, "0");
    const paddedSecs = String(secs).padStart(2, "0");

    return `${paddedMins}:${paddedSecs}`;
  }

  // Show the starting time immediately
  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${formatTime(timeLeft)}`;

  // Start the countdown — runs every 1000ms (1 second)
  window.countdownTimer = setInterval(() => {
    timeLeft--; // reduce by 1 second

    // Update the heading each second
    document.getElementById("timeRemaining").innerText =
      `Time Remaining: ${formatTime(timeLeft)}`;

    // When the timer reaches zero
    if (timeLeft <= 0) {
      clearInterval(window.countdownTimer); // stop the countdown
      clearInterval(flashInterval); // stop the flashing if it was running
      document.getElementById("timeRemaining").innerText =
        `Time Remaining: 00:00`;
      playAlarm(); // play the alarm sound
      startFlashing(); // start flashing the background
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
    stopFlashing(); // stop flashing if running
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
