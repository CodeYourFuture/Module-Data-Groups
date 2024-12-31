// Given the user has entered a number in the input field When the user clicks the “Set Alarm” button 
// Then the “Time Remaining” title should update to show the entered number in mm:ss format

// Given the alarm is set with a valid time When one second passes Then the “Time Remaining” title should decrement by 1 second

// Given the alarm is set with a time of 00:00 When the timer reaches 00:00 Then the alarm sound should play continuously

// Given the alarm sound is currently playing When the user clicks the “Stop Alarm” button Then the alarm sound should stop playing

// Given the alarm is set with a time of 00:10 When the timer reaches 00:00 Then the background color should change And the alarm sound should play

// Given the user has not set an alarm When the page first loads Then the “Time Remaining” title should show 00:00 And no alarm sound should play

// _______________________________________________________SOLUTION____________________________________________________


let activeIntervalId = null;

function setAlarm() {
  
  // This condition clear any existing interval
  if (activeIntervalId) {
    clearInterval(activeIntervalId);
  }
  // Declaration of timeInput allow us to access and retrieve the number of seconds entered in input box.
  const timeInput = document.getElementById("alarmSet").value; 
  // 
  const timeRemaining = document.getElementById("timeRemaining"); // This variable evaluate to the display.

  // The user must enter a positive number. If not, an alert is shown and exits
  if (!timeInput || isNaN(timeInput) || timeInput <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }

  let timeLeft = parseInt(timeInput, 10);

  // Format time to mm:ss
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  timeRemaining.textContent = `Time Remaining: ${formatTime(timeLeft)}`;

  // Timer countdown logic
  activeIntervalId = setInterval(() => {
    timeLeft -= 1;
    timeRemaining.textContent = `Time Remaining: ${formatTime(timeLeft)}`;

    // When timer hits 00:00, the countdown stops, the alarm plays, and the background color changes to red
    if (timeLeft <= 0) {
      clearInterval(activeIntervalId);
      timeRemaining.textContent = `Time Remaining: 00:00`;
      playAlarm();
      document.body.style.backgroundColor = "red"; // Change background color when alarm plays
    }
  }, 1000);

  // To stop the alarm and reset, when the stop alarm button is clicked. and the background also is reset to it's default color
  document.getElementById("stop").addEventListener("click", () => {
    if (activeIntervalId) {
      clearInterval(activeIntervalId);
    }
    pauseAlarm();
    document.body.style.backgroundColor = ""; // Reset background color
  });
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
