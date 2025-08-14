let countdown; // Declare countdown globally to make it accessible

function setAlarm() {
  // Clear any previous timer to prevent multiple timers running simultaneously
  clearInterval(countdown);

  // Get the value entered by the user in the input field and convert it to an integer
  let inputTime = parseInt(document.getElementById("alarmSet").value);

  // If the input is not a valid number or is less than or equal to 0, show an alert and stop execution
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please type or select your time 👇⏰");
    return;
  }

  // Store the remaining time for the countdown
  let timeRemaining = inputTime;

  /**
   * Function to format the time into "MM:SS" format
   * @param {number} seconds - The number of seconds to be formatted
   * @returns {string} - The formatted time in the form "Time Remaining: MM:SS"
   */
  function formatTime(seconds) {
    // Calculate minutes and remaining seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Return the formatted time as a string
    return `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  // Update the time display on the page with the initial time
  document.getElementById("timeRemaining").textContent =
    formatTime(timeRemaining);

  // Start the countdown timer to update the time every second
  countdown = setInterval(function () {
    // Otherwise, decrease the remaining time by 1 second
    timeRemaining--;

    // If the time reaches 0, stop the countdown and play the alarm
    if (timeRemaining <= 0) {
      clearInterval(countdown); // Stop the countdown timer
      document.getElementById("timeRemaining").textContent = formatTime(0); // Ensure "00:00" is displayed
      playAlarm(); // Play the alarm sound
    } else {
      // Update the time display on the page with the updated time
      document.getElementById("timeRemaining").textContent =
        formatTime(timeRemaining);
    }
  }, 1000); // The timer runs every 1000 milliseconds (1 second)
}

// DO NOT EDIT BELOW HERE
let soundAlarm = new Audio("trebolClan.mp3");
let SoundStop = new Audio("stopAlarm.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  soundAlarm.play();
}

function pauseAlarm() {
  clearInterval(countdown);
  soundAlarm.pause();
  soundAlarm.currentTime = 0;
  SoundStop.play();
}

window.onload = setup;
