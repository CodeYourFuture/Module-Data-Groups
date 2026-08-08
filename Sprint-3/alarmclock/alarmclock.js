let timer;

function updateDisplay(timeRemaining, heading) {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;

  heading.innerText =
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");
}

function setAlarm() {
  let input = document.getElementById("alarmSet");
  let heading = document.getElementById("timeRemaining");

  let timeRemaining = parseInt(input.value);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a positive number of seconds.");
    return;
  }

  clearInterval(timer);
  pauseAlarm();

  audio.currentTime = 0;
  document.body.style.backgroundColor = "";

  updateDisplay(timeRemaining, heading);

  function countdown() {
    timeRemaining = timeRemaining - 1;

    updateDisplay(timeRemaining, heading);

    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.body.style.backgroundColor = "red";
      playAlarm();
    }
  }

  timer = setInterval(countdown, 1000);
}

function stopAlarm() {
  clearInterval(timer);
  pauseAlarm();
}

const setButton = document.getElementById("set");
const stopButton = document.getElementById("stop");

setButton.addEventListener(
  "click",
  function (event) {
    event.stopImmediatePropagation();
    setAlarm();
  },
  true
);

stopButton.addEventListener(
  "click",
  function (event) {
    event.stopImmediatePropagation();
    stopAlarm();
  },
  true
);

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
