let countdownInterval;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let time = parseInt(input.value, 10);

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  clearInterval(countdownInterval);

  document.body.style.backgroundColor = "white";
  audio.pause();
  audio.currentTime = 0;

  updateDisplay(time);

  countdownInterval = setInterval(() => {
    time--;

    updateDisplay(time);

    if (time <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
      document.body.style.backgroundColor = "purple";
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: ${mins}:${secs}`;
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
