let alarmTimer;

function setAlarm() {
  clearTimeout(alarmTimer);

  let secondsRemaining = Number(document.getElementById("alarmSet").value);

  function updateTimer() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    document.getElementById("timeRemaining").innerText =
      `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (secondsRemaining === 0) {
      playAlarm();
      return;
    }

    secondsRemaining--;

    alarmTimer = setTimeout(updateTimer, 1000);
  }

  updateTimer();
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