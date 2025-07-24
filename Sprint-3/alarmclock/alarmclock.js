let isTimerRunning = false; // Global variable to track timer status

function setAlarm() {
  if (isTimerRunning) {
    alert("A timer is already running.");
    return;
  }

  let alarmInput = parseInt(document.getElementById("alarmSet").value, 10);

  if (isNaN(alarmInput) || alarmInput <= 0) {
    alert("Please enter a valid time");
    return;
  }

  isTimerRunning = true; // set timer state to running
  const timeRemaining = document.getElementById("timeRemaining");

  timeRemaining.innerText = `Time Remaining: ${String(
    Math.floor(alarmInput / 60)
  ).padStart(2, "0")}:${String(alarmInput % 60).padStart(2, "0")}`;

  const intervalID = setInterval(() => {
    alarmInput--;

    if (alarmInput > 0) {
      timeRemaining.innerText = `Time Remaining: ${String(
        Math.floor(alarmInput / 60)
      ).padStart(2, "0")}:${String(alarmInput % 60).padStart(2, "0")}`;
    } else {
      clearInterval(intervalID);
      isTimerRunning = false; // reset timer state
      timeRemaining.innerText = "Time Remaining: 00:00";
      playAlarm();
      startFlashingBackground();
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
