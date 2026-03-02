function setAlarm() {
  // Find the input box by its id
  const input = document.getElementById("alarmSet");
  // Get whatever number the user typed,
  // and convert it to a real number
  const minutes = parseInt(input.value, 10);
  // If nothing useful was entered, do nothing
  if (isNaN(minutes) || minutes <= 0) {
    return;
  }
  // Turn minutes to mm:ss format
  const displayMinutes = minutes.toString().padStart(2, "0");
  const display = `Time Remaining: ${displayMinutes}:00`;
  // Find the <h1> and update it
  const heading = document.getElementById("timeRemaining");
  heading.textContent = display;
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
