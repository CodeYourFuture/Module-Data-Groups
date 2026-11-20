function setAlarm() {
  const remainingTimeEl = document.getElementById("timeRemaining");
  const setTimeInput = document.getElementById("alarmSet");
  remainingTimeEl.innerText = `Time Remaining: ${setTimeInput.value}`
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
