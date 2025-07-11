let timeRemaining = 0;
let timerAlarm = null;
let timerPaused = false;

function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  timeRemaining = parseInt(input, 10);

  if (!timeRemaining || timeRemaining <= 0) {
    alert("Please enter bigger number above 0");
    return;
  }

  timerPaused = false;
  updateDisplay();

  if (timerAlarm) clearInterval(timerAlarm);

  timerAlarm = setInterval(() => {
    if (!timerPaused) {
      timeRemaining--;
      console.log("Time Left:", timeRemaining);
      updateDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timerAlarm);
        playAlarm();
      }
    }
  }, 1000);
}
function updateDisplay() {
  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const seconds = String(timeRemaining % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${seconds}`;
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
  document.getElementById("pause").addEventListener("click", () => {
    togglePause();
  });
}

function playAlarm() {
  audio.play();
  document.body.classList.add("flash");
}

function pauseAlarm() {
  audio.pause();
  document.body.classList.remove("flash");
}
function togglePause() {
  timerPaused = !timerPaused;
}

window.onload = setup;
