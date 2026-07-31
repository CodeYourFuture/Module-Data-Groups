let timer;

function setAlarm() {
  let input = document.getElementById("alarmSet");
  let heading = document.getElementById("timeRemaining");

  let timeRemaining = parseInt(input.value);

  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;

  heading.innerText =
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  clearInterval(timer);

  function countdown() {
    timeRemaining = timeRemaining - 1;

    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    heading.innerText =
      "Time Remaining: " +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");

    if (timeRemaining <= 0) {
      clearInterval(timer);
      document.body.style.backgroundColor = "red";
      playAlarm();
    }
  }

  timer = setInterval(countdown, 1000);
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
