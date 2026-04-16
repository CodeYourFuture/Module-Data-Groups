let countdownId;

// moved to outer scope, takes seconds as a parameter
function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  document.getElementById("timeRemaining").textContent =
    `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

// reset before starting new countdown
function resetAlarm() {
  clearInterval(countdownId);
  audio.pause();
  audio.currentTime = 0;
  updateDisplay(0);
  document.body.classList.toggle("alarm-activated", false);
}

function setAlarm() {
  resetAlarm();
  let seconds = parseInt(document.getElementById("alarmSet").value);

  if (!seconds || seconds < 1) {
    alert("The number of seconds must be higher than 0 please");
    return;
  }

  updateDisplay(seconds);
  // pass seconds as argument and update immediately on click

  countdownId = setInterval(() => {
    seconds--;
    updateDisplay(seconds);
    // pass seconds as argument

    if (seconds <= 0) {
      clearInterval(countdownId);
      playAlarm();
      document.body.classList.toggle("alarm-activated", true);
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
