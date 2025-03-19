

// // DO NOT EDIT BELOW HERE
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
  console.log("Alarm is playing...");
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0; // Reset the audio to the beginning
  console.log("Alarm stopped.");
}



function setAlarm() {
  // Retrieve the alarm time and remaining time elements
  const alarmSetInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");


}
  // Convert the input value to an integer representing the number of seconds
  let seconds = parseInt(alarmSetInput.value, 10);

  // Validate the input value
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please provide a valid number of seconds.");
    return;
  }
// Start the countdown immediately inside setInterval
function updateTimer() {
  // Format the remaining time as MM:SS
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timeRemaining.textContent = `Time Remaining: ${minutes}:${secs}`;

    // Trigger the alarm when the timer reaches zero
    if (seconds === 0) {
      clearInterval(countdownInterval); // Stop the countdown
      playAlarm(); // Trigger the alarm sound

      // Change the background color briefly
      document.body.style.backgroundColor = "red";
      setTimeout(() => {
        document.body.style.backgroundColor = ""; // Reset the background color after a short delay
      }, 1000);

      return; // Exit the function
    }

    seconds--; // Decrease the seconds count
  }

  // Initialize the countdown timer
  updateTimer();
  const countdownInterval = setInterval(updateTimer, 1000);


  // Add an event listener to stop the alarm and clear the interval
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdownInterval);
    pauseAlarm(); // Stop the alarm sound
  });

