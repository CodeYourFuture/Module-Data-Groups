let secondsRemaining = 0;
let timer = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  secondsRemaining = Number(input.value);

  if (secondsRemaining <= 0) {
    updateHeading(heading, 0);
    return;
  }

  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }

  updateHeading(heading, secondsRemaining);

  timer = setInterval(() => {
    secondsRemaining -= 1;

    updateHeading(heading, secondsRemaining);

    if (secondsRemaining === 0) {
      clearInterval(timer);
      timer = null;
      playAlarm();
    }
  }, 1000);
}

function updateHeading(heading, totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  heading.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
}

function stopTimer() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

window.addEventListener("load", () => {
  document.getElementById("stop").addEventListener("click", stopTimer);
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