function setAlarm() {
  // Get the alarm time
  const alarmSetInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  
  // Parse the input value as an integer (number of seconds)
  let seconds = parseInt(alarmSetInput.value, 10);

  // Validate the input
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  // Function to update the timer display
  function updateTimer() {
    // Format minutes and seconds as MM:SS
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    timeRemaining.textContent = `Time Remaining: ${minutes}:${secs}`;

    // Play the alarm when the timer reaches 0
    if (seconds === 0) {
      clearInterval(countdownInterval); // Stop the countdown
      playAlarm(); // Play the alarm sound

      // Change the background color
      document.body.style.backgroundColor = "red";
      setTimeout(() => {
        document.body.style.backgroundColor = ""; // Reset the background after a delay
      }, 1000);

      return; // Exit the function
    }

    seconds--; // Decrement the seconds
  }

  // Start the countdown timer
  updateTimer();
  const countdownInterval = setInterval(updateTimer, 1000);

  // Add event listener to stop the alarm and clear the interval
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdownInterval);
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
