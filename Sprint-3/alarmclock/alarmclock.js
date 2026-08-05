let timeRemaining = 0;
let intervalId = null;
let isPaused = false;

function reset() {
  // 1. Stop any active interval timer and clear the ID
  clearInterval(intervalId);
  intervalId = null;

  // 2. Reset the state variables back to default
  timeRemaining = 0;
  isPaused = false;

  // 3. Stop visual and audio effects
  document.body.classList.remove("flash");
  pauseAlarm();

  // 4. Update the screen display back to 00:00
  updateDisplay(0);
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const value = input.value.trim();//trim empty string 
  //Check if the input is empty 
  if (value === "") {
    alert("Please enter a number of seconds.");
    return;
  }

  const seconds = Number(value);
//validate that input is a positive integer and doestn't exceed 1 hour
  if (
    isNaN(seconds) ||
    !Number.isInteger(seconds) ||
    seconds <= 0 ||
    seconds > 3600
  ) {
    alert("Please enter a valid whole number between 1 and 3600.");
    return;
  }
  reset();

  timeRemaining = seconds;
  isPaused = false;
  updateDisplay(timeRemaining);
  // Start a new countdown
  startCountdown();
}

function startCountdown() {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(() => {
    timeRemaining--;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      playAlarm();
      document.body.classList.add("flash");
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const title = document.getElementById("timeRemaining");


  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  title.textContent = `Time Remaining: ${mins}:${secs}`;
}
function togglePause() {
  if (intervalId === null && !isPaused) {
    return;
  }

  if (!isPaused) {
    clearInterval(intervalId);
    intervalId = null;
    isPaused = true;
  } else {
    isPaused = false;
    startCountdown();
  }
}
document.getElementById("pause").addEventListener("click", togglePause);
document.getElementById("stop").addEventListener("click", reset);



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
