// This is our main function that gets called when "Set Alarm" button is clicked
function setAlarm() {
  // STEP 1: Get the number the user typed in the input box
  // document.getElementById finds the HTML element with id="alarmSet" (our input field)
  // .value gets whatever number the user typed in that input field
  const alarmSet = document.getElementById("alarmSet");
  let timeInSeconds = parseInt(alarmSet.value);

  // STEP 2: Check if the user entered a valid number
  // isNaN means "Is Not a Number" - it checks if what they typed isn't a real number
  // We also check if the number is 0 or negative, which wouldn't make sense for a timer
  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("Please enter a valid positive number");
    return; // This stops the function here if the input is invalid
  }

  // STEP 3: Stop any existing countdown (in case user clicks "Set Alarm" multiple times)
  // We store our timer in window.countdownInterval so we can access it later
  if (window.countdownInterval) {
    clearInterval(window.countdownInterval); // This stops the previous timer
  }

  // STEP 4: Show the initial time immediately (don't wait 1 second for first update)
  updateTimeDisplay(timeInSeconds);

  // STEP 5: Start the countdown timer
  // setInterval runs code repeatedly every X milliseconds (1000ms = 1 second)
  window.countdownInterval = setInterval(() => {
    // This code runs every second:

    // STEP 5a: Decrease time by 1 second
    timeInSeconds--;

    // STEP 5b: Update the display with new time
    updateTimeDisplay(timeInSeconds);

    // STEP 5c: Check if time is up
    if (timeInSeconds <= 0) {
      clearInterval(window.countdownInterval); // Stop the timer
      playAlarm(); // Play the alarm sound (this function is provided for us)
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// This helper function takes seconds and displays them as MM:SS format
function updateTimeDisplay(seconds) {
  // STEP 1: Find the HTML element where we show the time
  // This finds the <h1> tag with id="timeRemaining" where we display "Time Remaining: 00:00"
  const timeRemaining = document.getElementById("timeRemaining");

  // STEP 2: Convert total seconds into minutes and seconds
  // Math.floor rounds DOWN to nearest whole number (so 65 seconds becomes 1 minute, not 1.08)
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60; // % gives us the remainder (65 % 60 = 5 seconds)

  // STEP 3: Format numbers to always show 2 digits with leading zeros
  // padStart(2, '0') means "make this string 2 characters long by adding '0' to the front if needed"
  // So 5 becomes "05", but 12 stays "12"
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  // STEP 4: Update the actual text on the webpage
  // This changes what the user sees on screen
  timeRemaining.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
