function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let timeRemaining = parseInt(input, 10);

  if (isNaN(timeRemaining) || timeRemaining < 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  // Update the display immediately
  updateDisplay(timeRemaining);

  // Clear any existing interval
  let alarmInterval;
  if (alarmInterval) clearInterval(alarmInterval);

  // Start countdown
  alarmInterval = setInterval(() => {
    timeRemaining--;

    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(alarmInterval);
      playAlarm();
      //document.getElementById("alarmSet").value = "";
    }
  }, 1000);
  //stopping the alarm and clearing the input field
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(alarmInterval);
    document.getElementById("alarmSet").value = "";
  });
}

// minutes and seconds to be displayed properly
function updateDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${formatted}`;
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
