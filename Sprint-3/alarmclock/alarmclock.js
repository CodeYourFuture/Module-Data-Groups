let countdownInterval;  // We use this to store the interval and stop it later

function setAlarm() {
  let timeRemaining = parseInt(document.getElementById("alarmSet").value);  // Get the time from the input
  
  let displayTime = "00:";  // Start with "00:"
  
  if (timeRemaining < 10) {
    displayTime += "0" + timeRemaining;  // Add leading zero if timeRemaining is less than 10
  } else {
    displayTime += timeRemaining;  // If timeRemaining is 10 or more, just add it
  }

  document.getElementById("timeRemaining").innerText = "Time Remaining: " + displayTime;  // Display the time
  
  countdownInterval = setInterval(function() {
    if (timeRemaining > 0) {
      timeRemaining--;  // Reduce the time by 1 every second

      let displayTime = "00:";  // Reset the displayTime
      
      if (timeRemaining < 10) {
        displayTime += "0" + timeRemaining;  // Add leading zero if timeRemaining is less than 10
      } else {
        displayTime += timeRemaining;  // If timeRemaining is 10 or more, just add it
      }

      document.getElementById("timeRemaining").innerText = "Time Remaining: " + displayTime;  // Update the time on the screen
    } else {
      playAlarm();  // If time is up, play the alarm
      clearInterval(countdownInterval);  // Stop the countdown
    }
  }, 1000);  // This means the function runs every 1000 milliseconds (1 second)
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
