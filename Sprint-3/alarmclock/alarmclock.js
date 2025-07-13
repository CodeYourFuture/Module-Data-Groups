let countdown = 0;
let timerId = null;
let isPaused = false;
const inputElement = document.getElementById("alarmSet");
const displayElement = document.getElementById("timeRemaining");

function setAlarm() {
  let inputValue = inputElement.value;
  let seconds = Number(inputValue);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds!");
    return;
  }

  countdown = seconds;
  isPaused = false;
  clearInterval(timerId);
  timerId = setInterval(tick, 1000);
  updateDisplay();
}

function updateDisplay() {
  const minutesStr = String(Math.floor(countdown / 60)).padStart(2, "0");
  const secondsStr = String(countdown % 60).padStart(2, "0");
  displayElement.textContent = `Time Remaining: ${minutesStr}:${secondsStr}`;
}

function tick() {
  if (isPaused) return;
  
  if (countdown === 0) {
    clearInterval(timerId);
    timerId = null;
    playAlarm();
    return;
  }
  countdown--;
  updateDisplay();
}

function togglePause() {
  if (timerId === null) {
    return;
  }
  isPaused = !isPaused;
  const pauseButton = document.getElementById("pause");
  pauseButton.textContent = isPaused ? "Resume" : "Pause";
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval
    (timerId) = null;
    isPaused = false;
    document.getElementById("pause").textContent = "Pause";
  });
  document.getElementById("pause").addEventListener("click", () => {
    togglePause();
  });
}

function playAlarm() {
  audio.play();
  document.body.classList.add("flash");
}

function pauseAlarm() {
  audio.pause();
  document.body.classList.remove("flash");
}

window.onload = setup;
