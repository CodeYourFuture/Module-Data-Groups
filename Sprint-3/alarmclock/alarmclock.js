let remainingSeconds = 0;
let intervalId;
function setAlarm() {
  clearInterval(intervalId);

  const initialSeconds = Number(document.getElementById("alarmSet").value);
  remainingSeconds = initialSeconds;

  let minutesDisplay = Math.floor(initialSeconds / 60)
    .toString()
    .padStart(2, "0");
  let secondsDisplay = Math.floor(initialSeconds % 60)
    .toString()
    .padStart(2, "0");
  let timeRemainingHeading = document.getElementById("timeRemaining");
  timeRemainingHeading.innerText = `Time Remaining: ${minutesDisplay}:${secondsDisplay}`;

  intervalId = setInterval(() => {
    remainingSeconds--;
    let currentMinutes = Math.floor(remainingSeconds / 60)
      .toString()
      .padStart(2, "0");
    let currentSeconds = Math.floor(remainingSeconds % 60)
      .toString()
      .padStart(2, "0");
    timeRemainingHeading.innerText = `Time Remaining: ${currentMinutes}:${currentSeconds}`;
    if (remainingSeconds === 0) {
      clearInterval(intervalId);
      playAlarm();
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
