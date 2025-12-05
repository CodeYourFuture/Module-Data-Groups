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
  const heading = document.getElementById("timeRemaining");
  const input = document.getElementById("alarmSet");

  totalSeconds = Math.max(0, totalSeconds);
  const formatted = formatTime(totalSeconds);

  input.value = formatted;
  heading.innerHTML = `Time Remaining:<br><br>${formatted}`;
}

function incrementTime(amount) {
  totalSeconds = Math.max(0, totalSeconds + amount);
  updateDisplay();
}

function resetAlarmState() {
  if (timer) clearInterval(timer);
  timer = null;

  audio.pause();
  audio.currentTime = 0;
}

function setAlarm() {
  resetAlarmState();
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
    totalSeconds = Math.max(0, totalSeconds);
    updateDisplay();

    if (totalSeconds === 0) {
      clearInterval(timer);
      timer = null;
      playAlarm();
    }
  }, 1000);
}

function stopTimer() {
  if (timer) clearInterval(timer);
  timer = null;
  totalSeconds = 0;
  updateDisplay();
  audio.pause();
}

document.getElementById("up").addEventListener("click", () => incrementTime(5));
document
  .getElementById("down")
  .addEventListener("click", () => incrementTime(-5));
document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("stop").addEventListener("click", stopTimer);

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}
