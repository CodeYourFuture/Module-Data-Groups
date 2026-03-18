// Turns a number of seconds into "MM:SS" format
// e.g. 75 -> "01:15"
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // padStart makes sure single digits get a leading zero e.g. 5 -> "05"
  const mm = String(minutes).padStart(2, "0");
  const ss = String(remainingSeconds).padStart(2, "0");

  return mm + ":" + ss;
}

function setAlarm() {
  // Get the number the user typed in the input field
  let seconds = Number(document.getElementById("alarmSet").value);

  // Update the heading to show the starting time
  document.getElementById("timeRemaining").innerText =
    "Time Remaining: " + formatTime(seconds);

  // Count down every 1000ms (1 second)
  let intervalId = setInterval(function () {
    seconds = seconds - 1;

    // Update the heading each second
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: " + formatTime(seconds);

    // When we reach zero, stop counting and play the alarm
    if (seconds === 0) {
      clearInterval(intervalId);
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
