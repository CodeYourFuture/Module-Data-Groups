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

document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("stop").addEventListener("click", stopAlarm);

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
