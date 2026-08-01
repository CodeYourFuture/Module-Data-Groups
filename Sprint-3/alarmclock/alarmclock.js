let remainingSeconds = 0;
let intervalId;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
function setAlarm() {
  clearInterval(intervalId);

  const initialSeconds = Number(document.getElementById("alarmSet").value);
  const timeRemainingHeading = document.getElementById("timeRemaining");
  if (!initialSeconds || initialSeconds <= 0) {
    timeRemainingHeading.innerText =
      "Please enter a positive number of seconds";
    return;
  }
  remainingSeconds = initialSeconds;

  timeRemainingHeading.innerText = `Time Remaining: ${formatTime(
    remainingSeconds
  )}`;

  intervalId = setInterval(() => {
    remainingSeconds--;
    timeRemainingHeading.innerText = `Time Remaining: ${formatTime(
      remainingSeconds
    )}`;
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
