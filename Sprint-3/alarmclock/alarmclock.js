const timeRemainingDisplay = document.getElementById("timeRemaining");

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

function setAlarm() {
  document.getElementById("set").disabled = true;

  const input = document.getElementById("alarmSet").value;
  let number = Number(input);
  if (input === null || input === "") {
    window.alert("Please enter time in seconds");
    return;
  }

  let timeInMMSS = transformSeconds(number);
  timeRemainingDisplay.textContent = `Time Remaining: ${timeInMMSS}`;
  number = number - 1;

  const intervalId = setInterval(() => {
    timeInMMSS = transformSeconds(number);
    timeRemainingDisplay.textContent = `Time Remaining: ${timeInMMSS}`;

    if (number === 0) {
      playAlarm();
      clearInterval(intervalId);
      document.getElementById("set").disabled = false;
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
