let countdownTimer;

function setAlarm() {
  let alarmTime = Number(document.querySelector("input").value);

  if (!alarmTime || isNaN(alarmTime) || alarmTime <= 0) {
    alert("Please enter a valid positive number for the alarm time");
    return;
  }

  let timeLeft = alarmTime;

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  function updateTitle(time) {
    document.getElementById(
      "timeRemaining"
    ).innerHTML = `Time Remaining: ${formatTime(time)}`;
  }

  updateTitle(alarmTime);

  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  countdownTimer = setInterval(() => {
    timeLeft--;
    updateTitle(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
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
