function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  // Read total seconds from input
  let totalSeconds = parseInt(input.value, 10);
  if (Number.isNaN(totalSeconds) || totalSeconds < 0) {
    totalSeconds = 0;
  }

  // Format seconds into "MM:SS"
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  }

  // Immediately set the heading to the initial value
  heading.innerText = formatTime(totalSeconds);

  // If a previous interval exists, clear it so we only have one running
  if (window._alarmInterval) {
    clearInterval(window._alarmInterval);
    window._alarmInterval = null;
  }

  // Start counting down every 1000ms
  window._alarmInterval = setInterval(() => {
    totalSeconds -= 1;

    if (totalSeconds <= 0) {
      // update to 00:00, stop interval and play alarm
      heading.innerText = formatTime(0);
      clearInterval(window._alarmInterval);
      window._alarmInterval = null;
      if (typeof playAlarm === "function") {
        playAlarm();
      }
    } else {
      // update heading with remaining time
      heading.innerText = formatTime(totalSeconds);
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
