let alarmIntervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let seconds = parseInt(input.value, 10);
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;

  function formatMMSS(s) {
    const mm = Math.floor(s / 60).toString().padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `Time Remaining: ${mm}:${ss}`;
  }

  heading.innerText = formatMMSS(seconds);

  if (alarmIntervalId) {
    clearInterval(alarmIntervalId);
    alarmIntervalId = null;
  }

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

window.onload = setup;
