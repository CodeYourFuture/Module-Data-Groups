// Function to format time in mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

// function to reset the background and stop any background flashing
function resetBackground() {
  document.body.style.backgroundColor = "white"; // set background to white
  if (window.flashInterval) {
    clearInterval(window.flashInterval);
  }
}

// function to handle countdown clock
let countdownInterval = null;

function countdownClock(timeInSeconds) {
  const timeRemaining = document.querySelector("#timeRemaining");

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    timeInSeconds--;

    // update the display each second
    timeRemaining.textContent = `Time Remaining: ${formatTime(timeInSeconds)}`;

    // When time reaches 00:00, stop the countdown and play the alarm
    if (timeInSeconds <= 0) {
      clearInterval(countdownInterval);
      flashBackground();
    }
  }, 1000);
}

// function for background flash
function flashBackground() {
  let flashCount = 0; //
  const colors = ["pink", "plum", "indigo", "lavenderblush"];

  window.flashInterval = setInterval(() => {
    document.body.style.backgroundColor = colors[flashCount % colors.length];
    flashCount++;

    if (flashCount >= colors.length) {
      clearInterval(window.flashInterval);
      document.body.style.backgroundColor = "white"; // set the final background color to white

      setTimeout(() => {
        playAlarm(); // start the alart af the end of backgroung flash
      });
    }
  }, 500); // flash every 500ms
}

function setAlarm() {
  const inputAlarmSet = document.querySelector("#alarmSet"); // get input field
  const timeRemaining = document.querySelector("#timeRemaining"); // get time remaining title

  let timeInSeconds = parseInt(inputAlarmSet.value, 10); // read and parse input value

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  // reset the background and stop flashing if any previous countdown was running
  resetBackground();

  const formattedTime = formatTime(timeInSeconds);
  timeRemaining.innerText = `Time Remaining: ${formattedTime}`;

  // start the countdown clock by calling countdownClock
  countdownClock(timeInSeconds);
}

// function to pause the alarm, reset the input, and stop the countdown
function pauseAlarm() {
  audio.pause();
  resetBackground();
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  document.querySelector("#alarmSet").value = "";
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

window.onload = setup;
