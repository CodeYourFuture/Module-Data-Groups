let countdown;
let remainingTime;
let isPaused = false;

function setAlarm() {
  let time = parseInt(document.getElementById("alarmSet").value);

  if (isNaN(time) || time <= 0) return;

  remainingTime = time;
  updateDisplay(remainingTime);

  clearInterval(countdown);
  stopFlashingBackground();

  countdown = setInterval(() => {
    if (!isPaused) {
      remainingTime--;
      updateDisplay(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(countdown);
        playAlarm();
        startFlashingBackground();
      }
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${secs}`;
}

function pauseAlarm() {
  isPaused = !isPaused;
}

function startFlashingBackground() {
  document.body.classList.add("flashing");
}

function stopFlashingBackground() {
  document.body.classList.remove("flashing");
}

function resetAlarm() {
  clearInterval(countdown);
  stopFlashingBackground();
  remainingTime = 0;
  updateDisplay(remainingTime);
  isPaused = false;
  audio.pause();
  audio.currentTime = 0;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);

  document.getElementById("stop").addEventListener("click", () => {
    resetAlarm();
  });

  const pauseButton = document.createElement("button");
  pauseButton.innerText = "Pause/Resume";
  pauseButton.addEventListener("click", pauseAlarm);
  document.body.appendChild(pauseButton);
}

function playAlarm() {
  audio.play();
}

window.onload = setup;
