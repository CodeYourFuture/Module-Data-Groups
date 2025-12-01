let timer = null;
let totalSeconds = 0;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function parseInputTime(value) {
  if (!/^\d{2}:\d{2}$/.test(value)) return null;
  const [m, s] = value.split(":").map(Number);
  if (s > 59) return null;
  return m * 60 + s;
}

function updateDisplay() {
  document.getElementById("alarmSet").value = formatTime(totalSeconds);
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(totalSeconds)}`;
}

function incrementTime(amount) {
  totalSeconds += amount;
  if (totalSeconds < 0) totalSeconds = 0;
  updateDisplay();
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const parsed = parseInputTime(input.value);
  if (parsed === null) {
    alert("Use MM:SS format");
    return;
  }

  totalSeconds = parsed;
  updateDisplay();

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    totalSeconds--;
    updateDisplay();
    if (totalSeconds <= 0) {
      clearInterval(timer);
      timer = null;
      playAlarm();
    }
  }, 1000);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  totalSeconds = 0;
  updateDisplay();
  pauseAlarm();
}

// attach to window so HTML buttons can call them
window.incrementTime = incrementTime;
window.setAlarm = setAlarm;
window.stopTimer = stopTimer;

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.playAlarm = playAlarm;
window.pauseAlarm = pauseAlarm;

