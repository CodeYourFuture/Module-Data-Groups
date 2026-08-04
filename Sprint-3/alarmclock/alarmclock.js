function setAlarm() {
  let time = (Number.document.getElementById("alarmSet").value);

  let heading = document.getElementById("timeRemaining");

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  heading.innerText =
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  let timer = setIntervals(function () {
    time = time - 1;

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    heading.innerText =
      "Time Remaining: " +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds.padStart(2, "0"));

    if (time === 0) {
      playAlarm();
      clearInterval(timer);
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
