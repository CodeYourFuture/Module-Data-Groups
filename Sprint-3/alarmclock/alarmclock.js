// Function to format time in mm:ss format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

// requirement: Given the user has entered a number in the input field
// when the user clicks the “Set Alarm” button
// then the “Time Remaining” title should update to show the entered number in mm:ss format

function setAlarm() {
  const inputSeconds = parseInt(document.getElementById("alarmSet").value, 10);

  if (isNaN(inputSeconds) || inputSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  let remainingTime = inputSeconds;
  const timeRemainingElement = document.getElementById("timeRemaining");
  timeRemainingElement.textContent = `Time Remaining: ${formatTime(remainingTime)}`;

// requirement: Given the alarm is set with a valid time
// when one second passes
// then the “Time Remaining” title should decrement by 1 second

  clearInterval(window.alarmInterval);
  document.body.style.backgroundColor = "";

  window.alarmInterval = setInterval(() => {
    remainingTime--;
    timeRemainingElement.textContent = `Time Remaining: ${formatTime(remainingTime)}`;

// requirement: Given the alarm is set with a time of 00:00
// When the timer reaches 00:00
// Then the alarm sound should play continuously

// requirement: Given the alarm is set with a time of 00:10
// When the timer reaches 00:00
// Then the background color should change
// And the alarm sound should play

    if (remainingTime <= 0) {
      clearInterval(window.alarmInterval);
      document.body.style.backgroundColor = "orange";
      playAlarm();
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
