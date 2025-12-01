let countdownTimerId = null;
// interval id for the running countdown (null = no countdown running)

function setAlarm() {
  // Stops any previous countdown + stops any currently playing alarm sound
  if (countdownTimerId !== null) clearInterval(countdownTimerId);
  pauseAlarm();

  // Reads the number of seconds the user typed
  let totalSecRemaining =
    parseInt(document.getElementById("alarmSet").value, 10) || 0;

  // Element that displays: "Time Remaining: MM:SS"
  const timeRemainingTitle = document.getElementById("timeRemaining");

  // Updates the title based on totalSecRemaining
  const renderTimeRemaining = () => {
    const minutesRemaining = String(
      Math.floor(totalSecRemaining / 60)
    ).padStart(2, "0");
    const secondsRemaining = String(totalSecRemaining % 60).padStart(2, "0");
    timeRemainingTitle.textContent = `Time Remaining: ${minutesRemaining}:${secondsRemaining}`;
  };

  // Shows the starting value after clicking "Set Alarm"
  renderTimeRemaining();

  // Runs every second countdown tick
  countdownTimerId = setInterval(() => {
    // If time is up, stops ticking and starts the alarm sound
    if (totalSecRemaining <= 0) {
      clearInterval(countdownTimerId);
      countdownTimerId = null;
      playAlarm();
      return;
    }

    // Otherwise subtracts 1 second and update the display
    totalSecRemaining -= 1;
    renderTimeRemaining();
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
