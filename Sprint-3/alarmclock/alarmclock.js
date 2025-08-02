let timerId = null;
let timeLeft = 0;
let audio;

function startAlarm() {
  const input = document.getElementById("alarmSet");
  timeLeft = parseInt(input.value, 10);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    document.getElementById("timeRemaining").innerText = "Please enter a valid time.";
    return;
  }
  document.getElementById("alarmSet").disabled = true;
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("timeRemaining").innerText = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      playAlarm();
    }
  }, 1000);
}

function stopAlarm() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  document.getElementById("alarmSet").disabled = false;
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("timeRemaining").innerText = formatTime(0);
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `Time Remaining: ${minutes}:${secs}`;
}

function playAlarm() {
  audio.loop = true;
  audio.play();
}

function setup() {
  audio = document.getElementById("alarmAudio");
  document.getElementById("start").addEventListener("click", startAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);
}

window.onload = setup;