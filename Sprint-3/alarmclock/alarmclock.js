let countDown = null;
let secondsTillEnd = 0;
function setAlarm() {
  // TODO: Get input from user
  const input = document.getElementById("alarmSet").value;
  const seconds = parseInt(input);

  // TODO: Validate input
  if (isNaN(seconds) || seconds < 0) {
    alert("Please enter a valid number of seconds");
    return;
  }
  // TODO: Clear any existing countdown
  if (countDown) {
    clearInterval(countDown);
  }
  secondsTillEnd = seconds;

  // Update heading
  updateHeading(secondsTillEnd);

  // TODO: Start countdown
  // TODO: Play alarm if end reached
}

function updateHeading(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `Time Remaining: ${minutes}:${timeInSeconds.toString().padStart(2, "0")}`;
  document.getElementById("timeRemaining").innerText = formattedTime;
  return;
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
