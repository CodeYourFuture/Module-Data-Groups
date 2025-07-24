let countdownTimer;
let flashInterval;

function setAlarm() {
  document.getElementById("stop").addEventListener("click", () => {
    if (flashInterval) {
      clearInterval(flashInterval);
      flashInterval = null;
      document.body.style.backgroundColor = "";
    }
  });

  let alarmTime = Number(document.querySelector("input").value);

  if (!alarmTime || isNaN(alarmTime) || alarmTime <= 0) {
    alert("Please enter a valid positive number for the alarm time");
    return;
  }

  let timeLeft = alarmTime;

  function formatTime(time) {
    const pad = (num) => num.toString().padStart(2, "0");

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${pad(minutes)}:${pad(seconds)}`;
  }

  function updateTitle(time) {
    document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(time)}`;
  }

  updateTitle(alarmTime);

  function flashingBackground() {
    let isRed = false;
    flashInterval = setInterval(() => {
      document.body.style.backgroundColor = isRed ? "#ffffff" : "#ff4444";
      isRed = !isRed;
    }, 400);
  }

  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  countdownTimer = setInterval(() => {
    timeLeft--;
    updateTitle(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      flashingBackground();
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
