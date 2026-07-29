function setAlarm() {
  // Get the input element
  const alarmSetInput = document.getElementById("alarmSet");

  // Get the number of seconds
  const seconds = Number(alarmSetInput.value);

  // Validate input
  if (seconds <= 0 || isNaN(seconds)) {
    alert("Please enter a valid number.");
    return;
  }

  // Wait the specified number of seconds
  setTimeout(() => {
    playAlarm()
  }, seconds * 1000);
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
