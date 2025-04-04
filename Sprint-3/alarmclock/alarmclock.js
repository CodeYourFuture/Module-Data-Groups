function setAlarm() {
  // Accessing and storing input and display elements from html file
  let timeDisplay = document.getElementById("timeRemaining");
  let inputField = document.getElementById("alarmSet");

  // Converting input value to a number
  let seconds = parseInt(inputField.value);

  // Checking if input is valid (not empty, not negative, and a number)
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  function updateTimer() {
    // Converting seconds into minutes and remaining seconds
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    // Formatting and updating the displayed time
    timeDisplay.innerText = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    if (seconds <= 0) {
      clearInterval(timer);
      playAlarm(); // Plays alarm sound when countdown finishes
      return;
    }

    seconds--; // Decreasing the seconds count by 1
  }

  updateTimer();
  let timer = setInterval(updateTimer, 1000);
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
