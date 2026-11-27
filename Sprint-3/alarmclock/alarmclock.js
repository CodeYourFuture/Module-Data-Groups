let isCountingDown = false;

function setAlarm() {
  const timeSubmitted = document.getElementById("alarmSet").value;
  let totalSeconds = Number(timeSubmitted);

  if (totalSeconds <= 0 || Number.isInteger(totalSeconds) === false) {
    return (document.getElementById("reminder").textContent =
      "Value of time should be integer and more than '0'.");
  }

  if (isCountingDown === true) {
    return (document.getElementById("reminder").textContent =
      "Alarm is counting down. Pressing 'set alarm' is disallowed.");
  }

  document.getElementById("reminder").textContent = "";
  function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minutesInString = String(minutes).padStart(2, "0");
    const secondsInString = String(seconds).padStart(2, "0");

    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${minutesInString}:${secondsInString}`;
  }

  updateDisplay(totalSeconds);
  isCountingDown = true;

  const countdownId = setInterval(() => {
    totalSeconds -= 1;
    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(countdownId);
      playAlarm();
      isCountingDown = false;
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
