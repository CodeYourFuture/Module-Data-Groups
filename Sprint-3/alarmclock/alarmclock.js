// Function to format time in mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedRemainingSeconds = String(remainingSeconds).padStart(2, "0");

  console.log(
    "formatted time (mm:ss):",
    `${formattedMinutes}:${formattedRemainingSeconds}`
  );
  return `${formattedMinutes}:${formattedRemainingSeconds}`;
}

function setAlarm() {
  const inputAlarmSet = document.querySelector("#alarmSet"); // get input field
  const timeRemaining = document.querySelector("#timeRemaining"); // get time remaining title

  let timeInSeconds = parseInt(inputAlarmSet.value, 10); // read and parse input value
  console.log("time in seconds from input:", timeInSeconds);

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("please enter a valid number of seconds.");
    return;
  }

  const formattedTime = formatTime(timeInSeconds); // Use the formatTime function
  timeRemaining.innerText = `Time Remaining: ${formattedTime}`;

  // Countdown logic to update time and change background color at 00:00
  const countdown = setInterval(() => {
    timeInSeconds--;

    // Update the display each second
    timeRemaining.textContent = `Time Remaining: ${formatTime(timeInSeconds)}`;

    // When time reaches 0, stop the countdown and play the alarm
    if (timeInSeconds <= 0) {
      clearInterval(countdown); // Stop the timer

      let flashCount = 0; // To track the number of flashes
      const colors = ["pink", "plum", "indigo", "lavander blush"];
      const flashInterval = setInterval(() => {
        document.body.style.backgroundColor =
          colors[flashCount % colors.length];
        flashCount++;

        if (flashCount >= colors.length) {
          // Stop flashing after 3 flashes
          clearInterval(flashInterval); // Stop flashing
          document.body.style.backgroundColor = "pink"; // Keep background red
          playAlarm();
        }
      }, 500);
    }
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
module.exports = setAlarm;
