const displayRemainingTime = document.querySelector("#timeRemaining");

function setAlarm(alarmTime) {
  if (!alarmTime || alarmTime <= 0) {
    displayRemainingTime.textContent = "Please enter a valid number";
    return;
  }

  let remainingTime = alarmTime;
  let trigger = false;

  const interval = setInterval(() => {
    let minutes = Math.floor(remainingTime / 60)
      .toString()
      .padStart(2, "0");

    let seconds = (remainingTime % 60).toString().padStart(2, "0");

    displayRemainingTime.textContent = `Time Remaining: ${minutes}:${seconds}`;

    if (remainingTime <= 10) {
      document.getElementById("main").style.backgroundColor = "red";
    }

    if (!trigger && remainingTime === 0) {
      trigger = true;
      playAlarm();
      displayRemainingTime.textContent = "⏰";
      clearInterval(interval);
      return;
    }
    remainingTime--;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    const alarmTime = document.querySelector("#alarmSet").value;
    document.getElementById("main").style.backgroundColor = "white";
    setAlarm(alarmTime);
  });

  document.getElementById("stop").addEventListener("click", () => {
    document.getElementById("main").style.backgroundColor = "white";
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
