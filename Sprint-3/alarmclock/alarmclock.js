const input = document.getElementById("alarmSet");
const timeDisplay = document.querySelector("span");

function setAlarm() {
  let timeInput = Number(input.value);
  let minutes = Math.floor(timeInput / 60);
  let seconds = timeInput % 60;

  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}`;

  const alarm = setInterval(() => {
    timeInput--;
    let remainingMinutes = Math.floor(timeInput / 60);
    let remainingSeconds = timeInput % 60;
    remainingMinutes = remainingMinutes.toString().padStart(2, "0");
    remainingSeconds = remainingSeconds.toString().padStart(2, "0");
    timeDisplay.textContent = `${remainingMinutes}:${remainingSeconds}`;
    if (timeInput === 0) {
      playAlarm();
      clearInterval(alarm);
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
