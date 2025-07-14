function setAlarm() {
  const input = document.getElementById("alarmSet");
  const timeDisplay = document.getElementById("timeRemaining");

  let seconds  = parseInt(input.value, 10);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const remainingSeconds = String(seconds % 60).padStart(2, '0');

  timeDisplay.textContent = `Time Remaining: ${minutes}:${remainingSeconds}`;
}

document.getElementById("set").addEventListener("click", setAlarm);

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
