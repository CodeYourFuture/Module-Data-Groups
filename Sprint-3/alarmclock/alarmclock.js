// Stores the interval ID so we can clear it later
let interval = null;

function setAlarm() {
  // Clear any previously running countdown
  clearInterval(interval);

  // Reset background to default
  document.body.style.backgroundColor = "";

  // Read the input value and convert it to a plain integer (total seconds)
  let totalSeconds = parseInt(document.getElementById("alarmSet").value);

  // --- Format and display the initial time ---
  // Math.floor(119 / 60) = 1  --> minutes
  // 119 % 60 = 59             --> leftover seconds
  // padStart(2, "0") ensures single digits become "01", "09", etc.
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  document.getElementById("timeRemaining").innerText =
    "Time Remaining: " + mins + ":" + secs;

  // --- Start the countdown ---
  // setInterval calls the callback every 1000 ms (1 second) and returns an ID
  interval = setInterval(function () {
    totalSeconds--; // subtract 1 second

    if (totalSeconds <= 0) {
      // Stop the interval when time runs out
      clearInterval(interval);

      document.getElementById("timeRemaining").innerText =
        "Time Remaining: 00:00";

      // Change background color to signal the alarm
      document.body.style.backgroundColor = "red";

      // Trigger the alarm sound (defined below the DO NOT EDIT line)
      playAlarm();
      return;
    }

    // Recalculate mm:ss for the new totalSeconds and update the display
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: " + m + ":" + s;
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
