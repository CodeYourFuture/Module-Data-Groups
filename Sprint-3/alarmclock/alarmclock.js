// Declare a global variable to store the countdown currently running
let intervalId;

// Helper function to format total seconds and update the UI
function updateDisplay(totalSeconds) {
  let timeRemainingMinutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  let timeRemainingSeconds = (totalSeconds % 60).toString().padStart(2, "0");

  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${timeRemainingMinutes}:${timeRemainingSeconds}`;
}

function setAlarm() {
  if (intervalId) {
    clearInterval(intervalId); // when the set alarm button is clicked, if there is a countdown running, clear it
  }
  // When I press the “Set Alarm” button:
  // Read the number typed in the input field (in seconds)
  // Store this value in a variable called totalSeconds
  // Convert totalSeconds into minutes and seconds and save them inside timeRemainingMinutes and timeRemainingSeconds respectively
  // Format timeRemainingMinutes and timeRemainingSeconds so they always have 2 digits (mm:ss)
  // Display "Time Remaining: mm:ss" on the UI
  // Start a repeating timer using setInterval that runs every 1 second:
  // Decrease timeRemaining by 1
  // Convert the new time into mm:ss
  // Update the display
  // If timeRemaining reaches 0:
  // Stop the interval
  // Display "00:00"
  // Call playAlarm()

  let inputElement = document.getElementById("alarmSet"); // this is used to grab the input element so I can read whatever the user typed
  let totalSeconds = Number(inputElement.value); //this converts the input from string to number

  // Validate input
  if (totalSeconds <= 0 || isNaN(totalSeconds)) {
    alert("Please enter a positive number!");
    return;
  }

  document.getElementById("timeRemaining").style.backgroundColor = "";

  updateDisplay(totalSeconds);
  // start the countdown
  intervalId = setInterval(() => {
    // the code you write here will run every one second or 1000 milliseconds
    totalSeconds = totalSeconds - 1;
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      playAlarm();
      document.getElementById("timeRemaining").textContent =
        "Time Remaining: 00:00";
      document.getElementById("timeRemaining").style.backgroundColor = "blue";
      document.getElementById("alarmSet").value = "";
      return;
    }

    updateDisplay(totalSeconds);
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
