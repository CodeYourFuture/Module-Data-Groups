let timer = null;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateDisplay(seconds) {
  document.getElementById("timeRemaining").textContent =
    `Time Remaining: ${formatTime(seconds)}`;
}

function setAlarm() {
  if (timer) {
    clearInterval(timer);
  }

  let seconds = Number(document.getElementById("alarmSet").value);
  updateDisplay(seconds);

  timer = setInterval(() => {
    seconds--;
    updateDisplay(seconds);

    if (seconds <= 0) {
      clearInterval(timer);
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