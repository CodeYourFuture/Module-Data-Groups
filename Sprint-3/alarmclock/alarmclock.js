let timeRemaining = document.querySelector("#timeRemaining");
let alarmSet = document.querySelector("#alarmSet");
let countDown; // to store interval id for countdown
let isTimerRunning = false; // flag to track if a timer is running

function setAlarm() {
  let minutes = parseInt(alarmSet.value); // ensure the value is a number

  if (isNaN(minutes) || minutes < 1) {
    alert("Please enter a valid number for minutes");
    return;
  }

  let timeInMs = minutes * 60 * 1000; // convert minutes to milliseconds

  if (isTimerRunning) {
    clearInterval(countDown); // stop the current timer if it exists
    alert("A new timer has been started, overwriting the previous one.");
  }

  startCountDown(timeInMs);
}

// function to start countdown
function startCountDown(timeRemainingInMs) {
  isTimerRunning = true; // set the timer running flag
  updateTimeRemaining(timeRemainingInMs); // reset time remaining display

  countDown = setInterval(() => {
    timeRemainingInMs -= 1000;

    updateTimeRemaining(timeRemainingInMs);

    // when time is up, trigger the alarm
    if (timeRemainingInMs <= 0) {
      clearInterval(countDown);
      isTimerRunning = false; // reset the timer running flag
      playAlarm();
      timeRemaining.textContent = "Time's up!";
    }
  }, 1000);
}

// function to update the displayed time remaining
function updateTimeRemaining(timeRemainingInMs) {
  let totalSeconds = Math.floor(timeRemainingInMs / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  timeRemaining.textContent = `Time Remaining: ${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countDown); // stop the timer if it's running
    isTimerRunning = false; // reset the timer running flag
    timeRemaining.textContent = "Timer stopped.";
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