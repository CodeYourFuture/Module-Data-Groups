function pad(number) {
  const stringNum = number.toString();
  if (stringNum.length < 2) {
    return 0 + stringNum;
  }
  return stringNum;
}
function timeFormat(timeInSeconds) {
  const minutes = pad(Math.floor(timeInSeconds / 60));
  const seconds = pad(timeInSeconds % 60);
  return `${minutes}:${seconds}`;
}

let intervalId;

function setAlarm() {
  clearInterval(intervalId);
  let timeInSeconds = parseInt(document.getElementById("alarmSet").value, 10);

  displayTime(timeInSeconds);
  
  if (timeInSeconds === 0) {
    playAlarm();
  } else {
    intervalId = setInterval(() => {
      timeInSeconds--;
      displayTime(timeInSeconds);
      if (timeInSeconds === 0) {
        playAlarm();
        clearInterval(intervalId);
      }
    }, 1000);
  }
}

function displayTime(timeInSeconds) {
  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${timeFormat(timeInSeconds)}`;
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
