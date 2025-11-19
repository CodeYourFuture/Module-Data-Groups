function setAlarm() {
  // When I press the “Set Alarm” button:
    // Read the number typed in the input field (in seconds)
    // Store this value in a variable called timeRemaining
    // Convert timeRemaining into minutes and seconds
    // Format minutes and seconds so they always have 2 digits (mm:ss)
    // Display "Time Remaining: mm:ss" on the UI
    // Start a repeating timer using setInterval that runs every 1 second:
    // Decrease timeRemaining by 1
    // Convert the new time into mm:ss
    // Update the display
    // If timeRemaining reaches 0:
    // Stop the interval
    // Display "00:00"
    // Call playAlarm()
    
  // When I press the “Stop Alarm” button:
    // Call pauseAlarm() to stop the sound
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

