let countDownId = null;
let secondsTillEnd = 0;
let pausedAlarm = false;

let offFlashButton = document.getElementById("flash");
let pauseButton = document.getElementById("pause");

offFlashButton.addEventListener("click", () => {
  flashAlarm("off");
});

pauseButton.addEventListener("click", togglePausedAlarm);

function startTimer() {
  // Clear any existing timer before starting a new one
  if (countDownId) {
    clearInterval(countDownId);
  }

  countDownId = setInterval(() => {
    secondsTillEnd--;

    // Play alarm if end reached
    if (secondsTillEnd <= 0) {
      clearInterval(countDownId);
      countDownId = null;
      updateHeading(0);
      playAlarm();
      flashAlarm("on");
    } else {
      updateHeading(secondsTillEnd);
    }
  }, 1000);
}

function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  const seconds = parseInt(input);

  // Validate input
  if (isNaN(seconds) || seconds < 0) {
    alert("Please enter a valid number of seconds");
    return;
  }

  // Reset pause state if setting a new alarm
  if (pausedAlarm) {
    pausedAlarm = false;
    pauseButton.innerText = "Pause Alarm";
  }

  flashAlarm("off");
  secondsTillEnd = seconds;

  // Update heading immediately
  updateHeading(secondsTillEnd);

  // Start the countdown timer
  startTimer();
}

function updateHeading(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  document.getElementById("timeRemaining").innerText = formattedTime;
}

function flashAlarm(mode = "on") {
  const alarmDiv = document.getElementsByClassName("centre")[0];
  if (mode === "off") {
    alarmDiv.classList.remove("flash");
  } else {
    alarmDiv.classList.add("flash");
  }
}

function togglePausedAlarm() {
  // Only toggle if an alarm is actually active/running
  if (secondsTillEnd <= 0) return;

  if (pausedAlarm) {
    // Resume alarm
    pausedAlarm = false;
    pauseButton.innerText = "Pause Alarm";
    startTimer();
  } else {
    // Pause alarm: stop the interval completely
    pausedAlarm = true;
    pauseButton.innerText = "Resume Alarm";
    clearInterval(countDownId);
    countDownId = null;
  }
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
