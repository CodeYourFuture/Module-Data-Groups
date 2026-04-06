function setAlarm() {
  let seconds = document.getElementById("alarmSet").value

  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  let display = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

  document.getElementById("timeRemaining").innerText = display;
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
