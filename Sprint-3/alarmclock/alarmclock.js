function setAlarm() {
  let timeInput = document.getElementById("alarmSet");
  // console.log(timeInput.value);
  const timeRemaining = document.getElementById("timeRemaining");
  const minutes = String(Math.floor(timeInput.value / 60)).padstart(2, "0");
  const seconds = String(timeInput.value - minutes * 60).padStart(2, "0");
  timeRemaining.textContent = `Time remaining: ${minutes}:${seconds}`;
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
