let timerId = null;
let remainingSeconds = 0;

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateHeading() {
  const heading = document.getElementById("timeRemaining");
  if (!heading) return;
  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  heading.textContent = `Time Remaining: ${pad(m)}:${pad(s)}`;
}

function clearExistingTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const raw = input ? input.value : "0";
  remainingSeconds = Math.max(0, Math.floor(Number(raw)) || 0);

  updateHeading();

  clearExistingTimer();

  if (remainingSeconds === 0) {
    playAlarm();
    triggerVisualAlarm();
    return;
  }

  timerId = setInterval(() => {
    remainingSeconds--;
    updateHeading();

    if (remainingSeconds <= 0) {
      clearExistingTimer();
      playAlarm();
      triggerVisualAlarm();
    }
  }, 1000);
}

// Visual feedback helpers (add/remove a class on <body>)
function triggerVisualAlarm() {
  try {
    document.body.classList.add("alarm-active");
  } catch (e) {
    // ignore if DOM not available in test environment
  }
}

function clearVisualAlarm() {
  try {
    document.body.classList.remove("alarm-active");
  } catch (e) {
    // ignore if DOM not available in test environment
  }
}

// Ensure visual alarm is cleared when user stops the alarm or sets a new one.
try {
  window.addEventListener("load", () => {
    const stopBtn = document.getElementById("stop");
    if (stopBtn) stopBtn.addEventListener("click", clearVisualAlarm);

    const setBtn = document.getElementById("set");
    if (setBtn) setBtn.addEventListener("click", clearVisualAlarm);
  });
} catch (e) {}
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
