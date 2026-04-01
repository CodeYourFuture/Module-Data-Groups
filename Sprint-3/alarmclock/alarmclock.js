let countdownTimerId = null;

function resetAlarmState() {
  if (countdownTimerId !== null) {
    clearInterval(countdownTimerId);
    countdownTimerId = null;
  }

  // Ensure alarm audio from previous runs is stopped before a new countdown.
  if (audio && !audio.paused) {
    pauseAlarm();
  }
}

function setAlarm() {
  const heading = document.getElementById("timeRemaining");
  const input = document.getElementById("alarmSet");

  let remainingSeconds = Number(input.value);

  if (!Number.isFinite(remainingSeconds) || remainingSeconds < 0) {
    remainingSeconds = 0;
  }

  remainingSeconds = Math.floor(remainingSeconds);

  resetAlarmState();

  const updateHeading = () => {
    const minutes = Math.floor(remainingSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
  };

  updateHeading();

  if (remainingSeconds === 0) {
    playAlarm();
    return;
  }

  countdownTimerId = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds -= 1;
      updateHeading();
    }

    if (remainingSeconds === 0) {
      clearInterval(countdownTimerId);
      countdownTimerId = null;
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
    resetAlarmState();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
