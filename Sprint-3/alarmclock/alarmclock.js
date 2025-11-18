function setAlarm() {

  
}

function updateDisplay(totalSeconds) {
  console.log("updating display with", totalSeconds);
  const display = document.getElementById("timeRemaining"); // find h1 element

  if (totalSeconds < 0) totalSeconds = 0; //  safety prevent negative time.

  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0"); // Math.floor method rounds down and return the larges integer less than or equal to a given number.
  const secs = String(totalSeconds % 60).padStart(2, "0"); // calculate remaining seconds.

  display.textContent = `Time Remaining: ${mins}:${secs}`; // update h1 text
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



