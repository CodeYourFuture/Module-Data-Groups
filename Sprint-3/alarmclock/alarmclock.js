const displayRemainingTime = document.querySelector("#timeRemaining");

function setAlarm(alarmTime) {
  if (!alarmTime) {
    displayRemainingTime.textContent = "Please select a time";
    return;
  }
  const [h, m, s = 0] = alarmTime.split(":").map(Number);
  const totalSeconds = h * 3600 + m * 60 + s;

  const interval = setInterval(() => {
    const now = new Date();
    let currentTimeInSec =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    let remainingTime = totalSeconds - currentTimeInSec;

    const minutes = Math.floor(remainingTime / 60)
      .toString()
      .padStart(2, "0");

    const seconds = (remainingTime % 60).toString().padStart(2, "0");

    displayRemainingTime.textContent = `Time Remaining: ${minutes}:${seconds}`;

    if (remainingTime < 0) {
      remainingTime += 24 * 3600;
    }
    let trigger = false;
    if (!trigger && remainingTime === 10) {
      trigger = true;
      document.getElementById("main").style.backgroundColor = "red";
      displayRemainingTime.textContent = "⏰";
      playAlarm();
    }
    if (remainingTime === 0) {
      document.getElementById("main").style.backgroundColor = "red";
      displayRemainingTime.textContent = "⏰";
      playAlarm();
      clearInterval(interval);
      return;
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    const alarmTime = document.querySelector("#alarmSet").value;
    setAlarm(alarmTime);
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
