let secondsRemaining = 0;
let timer = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  secondsRemaining = Number(input.value);

  updateHeading(heading, secondsRemaining);

  timer = setInterval(() => {
    secondsRemaining -= 1;

    updateHeading(heading, secondsRemaining);

    if (secondsRemaining === 0) {
      clearInterval(timer);
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
