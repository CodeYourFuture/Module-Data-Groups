function timeConvert(sec) {
  let minutes = String(Math.floor(sec / 60)).padStart(2, "0");
  let seconds = String(sec % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

let timer;
function setAlarm() {
  clearInterval(timer);
  pauseAlarm();

  const timeInput = document.getElementById("alarmSet");
  let remainingSeconds = parseInt(timeInput.value);
  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    alert("Please provide a valid number of seconds");
    return;
  }

  const timeRemaining = document.getElementById("timeRemaining");

  timeRemaining.textContent = `Time Remaining: ${timeConvert(remainingSeconds)}`;

  timer = setInterval(() => {
    remainingSeconds--;
    timeRemaining.textContent = `Time Remaining: ${timeConvert(remainingSeconds)}`;
    if (remainingSeconds === 0) {
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
