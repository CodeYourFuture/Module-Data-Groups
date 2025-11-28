let intervalId;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let time = Number(input.value);

  const heading = document.getElementById("timeRemaining");

  clearInterval(intervalId);

  function format(num) {
    if (num < 10) return "0" + num;
    return num;
  }

  heading.innerText =
    "Time Remaining: " +
    format(Math.floor(time / 60)) +
    ":" +
    format(time % 60);

  intervalId = setInterval(() => {
    time--;

    if (time <= 0) {
      heading.innerText = "Time Remaining: 00:00";
      clearInterval(intervalId);
      playAlarm();
      return;
    }

    heading.innerText =
      "Time Remaining: " +
      format(Math.floor(time / 60)) +
      ":" +
      format(time % 60);
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
