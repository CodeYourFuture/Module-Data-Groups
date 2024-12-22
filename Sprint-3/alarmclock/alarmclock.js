// Declare a variable to hold the interval ID
let countdownInterval;

function setAlarm() {
  // Get the input value and parse it as an integer
  const inputField = document.getElementById("alarmSet");
  let timeRemaining = parseInt(inputField.value, 10);
  
  // Validate input
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid positive number for the alarm!");
    return;
  }

  // Display the initial countdown time
  displayTime(timeRemaining);

  // Clear any existing countdown
  clearInterval(countdownInterval);

  // Start the countdown
  countdownInterval = setInterval(() => {
    timeRemaining -= 1;
    displayTime(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval); // Stop the countdown
      playAlarm(); // Play the alarm sound
    }
  }, 1000);
}

// Function to display time in "00:00" format 
function displayTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("timeRemaining").innerText = `Time Remaining: ${minutes}:${secs}`;
}
