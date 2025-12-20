let countdown;

function getSecondsFromInput() {
  const inputValue = document.getElementById("alarmSet").value;
  const seconds = Number(inputValue);

  // Keep only a safe whole number.
  if (!Number.isFinite(seconds) || seconds < 0) {
    return 0;
  }

  return Math.floor(seconds);
}

function setAlarm() {
  let seconds = getSecondsFromInput();

  function updateDisplay() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    let mm = String(mins).padStart(2, "0");
    let ss = String(secs).padStart(2, "0");
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: " + mm + ":" + ss;
  }

  // Reset old timer and sound before starting a new one.
  pauseAlarm();
  updateDisplay();

  if (seconds <= 0) {
    return;
  }

  countdown = setInterval(function () {
    seconds--;
    updateDisplay();

    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAndReset();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  /* Stop the bell and freeze the timer */
  clearInterval(countdown);
  try {
    audio.pause();
    audio.currentTime = 0;
  } catch (error) {
    // Audio can be missing in tests.
  }
}

function stopAndReset() {
  pauseAlarm();
  document.getElementById("alarmSet").value = "";
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
}

window.onload = setup;
