let intervalId;
let timeRemaining = 0;
let isPaused = false;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  if (!isPaused) {
    timeRemaining = Number(input.value);
  }

  const heading = document.getElementById("timeRemaining");

  function updateHeading() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    heading.textContent = `Time Remaining: ${minutes}:${seconds}`;
  }

  updateHeading();

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateHeading();
    } else {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);

  isPaused = false;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

let flashIntervalId;

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    isPaused = true;
  }
});

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
  flashIntervalId = setInterval(() => {
    document.body.classList.toggle("alarm-flash");
  }, 500); // flashes every 0.5 seconds
}

function pauseAlarm() {
  audio.pause();
  clearInterval(flashIntervalId);
  document.body.classList.remove("alarm-flash");
}

window.onload = setup;
