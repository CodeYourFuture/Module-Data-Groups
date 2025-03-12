let timeRemainingDisplay = document.getElementById("timeRemaining");
let stopButton = document.getElementById("stop");

function transformSeconds(seconds) {
  let min = Math.trunc(seconds / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
    remainingSeconds = `0${remainingSeconds}`;
  }
  return `${min}:${remainingSeconds}`;
}
56;
function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let number = Number(input);

  let intervalId = setInterval(() => {
    let timeInMMSS = transformSeconds(number);
    timeRemainingDisplay.textContent = `Time Remaining: ${timeInMMSS}`;

    if (number === 0) {
      playAlarm();
      clearInterval(intervalId);
    }
    number = number - 1;
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
