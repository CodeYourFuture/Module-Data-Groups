function setAlarm(){
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let seconds = parseInt(input.value, 10);
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;

  function formatMMSS(s) {
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `Time Remaining: ${mm}:${ss}`;
  }

  heading.innerText = formatMMSS(seconds);

  if (window._alarmIntervalId) {
    clearInterval(window._alarmIntervalId);
    window._alarmIntervalId = null;
  }

  // If it's already zero, play immediately and don't start an interval
  if (seconds === 0) {
    playAlarm();
    return;
  }

  window._alarmIntervalId = setInterval(() => {
    seconds -= 1;

    if (seconds > 0) {
      heading.innerText = formatMMSS(seconds);
    } else {
      // Ensure the heading shows 00:00, stop the interval and play the alarm once
      heading.innerText = formatMMSS(0);
      clearInterval(window._alarmIntervalId);
      window._alarmIntervalId = null;
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
