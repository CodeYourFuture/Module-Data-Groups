let intervalId;
let isPaused;
let remainingSeconds = 0;

function updateCountDown() {
  updateDisplayedTime(remainingSeconds);

  if (remainingSeconds <= 0) {
    finishCountDown();
    return;
  }

  remainingSeconds -= 1;
}

function setAlarm() {
  const alarmSetEl = document.getElementById("alarmSet");
  const totalSeconds = +alarmSetEl.value;

  if (
    totalSeconds <= 0 ||
    isNaN(totalSeconds) ||
    !Number.isInteger(totalSeconds)
  ) {
    alarmSetEl.value = "";
    return;
  }
  cleanInitialState();

  remainingSeconds = totalSeconds;

  updateCountDown();
  intervalId = setInterval(updateCountDown, 1000);
}

function pauseCountDown(e) {
  if (isPaused === false) {
    clearInterval(intervalId);
    e.target.textContent = "Unpause";
    isPaused = true;
  } else {
    e.target.textContent = "Pause";
    isPaused = false;
    updateCountDown();
    intervalId = setInterval(updateCountDown, 1000);
  }
}

function cleanInitialState() {
  isPaused = false;
  const pauseButton = document.getElementById("pause-button");
  pauseButton.textContent = "Pause";
  clearInterval(intervalId);
  document.body.classList.remove("finish-countdown");
  updateDisplayedTime(0);
  document.getElementById("alarmSet").value = "";
  pauseAlarm();
}

function updateDisplayedTime(totalSeconds) {
  let seconds = totalSeconds % 60;
  let minutes = (totalSeconds - seconds) / 60;

  let paddedSeconds = seconds.toString().padStart(2, "0");
  let paddedMinutes = minutes.toString().padStart(2, "0");
  document.getElementById("timeRemaining").innerHTML =
    `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function finishCountDown() {
  document.body.classList.add("finish-countdown");
  playAlarm();
  clearInterval(intervalId);
}

window.addEventListener("load", function () {
  const pauseButton = document.getElementById("pause-button");
  const stopButton = document.getElementById("stop");
  pauseButton.addEventListener("click", pauseCountDown);
  stopButton.addEventListener("click", () => {
    remainingSeconds = 0;
    cleanInitialState();
  });
});

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
