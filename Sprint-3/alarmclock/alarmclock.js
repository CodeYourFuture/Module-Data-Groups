let alarmIntervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let seconds = parseInt(input.value, 10);

  // Reject invalid input instead of silently treating it as 0
  if (!Number.isFinite(seconds) || seconds < 0) {
    heading.innerText = "Please enter a valid number of seconds";
    return;
  }

  function formatMMSS(s) {
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `Time Remaining: ${mm}:${ss}`;
  }

  heading.innerText = formatMMSS(seconds);

  if (alarmIntervalId) {
    clearInterval(alarmIntervalId);
    alarmIntervalId = null;
  }

  // If it's already zero, play immediately and don't start an interval
  if (seconds === 0) {
    playAlarm();
    return;
  }

  alarmIntervalId = setInterval(() => {
    seconds -= 1;
    if (seconds > 0) {
      heading.innerText = formatMMSS(seconds);
    } else {
      heading.innerText = formatMMSS(0);
      clearInterval(alarmIntervalId);
      alarmIntervalId = null;
      playAlarm();
    }
  }, 1000);
}

function stopAlarm() {
  const heading = document.getElementById("timeRemaining");

  if (alarmIntervalId) {
    clearInterval(alarmIntervalId);
    alarmIntervalId = null;
  }

  heading.innerText = "Time Remaining: 00:00";
}

document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("stop").addEventListener("click", stopAlarm);


