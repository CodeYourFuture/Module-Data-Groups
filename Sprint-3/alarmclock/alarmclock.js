let countDown;
let remainingSeconds = 0;

function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let alarmSet = document.getElementById("alarmSet").value;
  remainingSeconds = Number(alarmSet);
  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    prompt("please enter a value greater than zero!");
    return;
  }
  displayTime();
  countDown = setInterval(timer, 1000);
}

function displayTime() {
  let timeRemaining = document.getElementById("timeRemaining");
  let hour = Math.floor(remainingSeconds / 3600);
  let minutes = Math.floor((remainingSeconds % 3600) / 60);
  let seconds = Math.floor(remainingSeconds % 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hour > 0) {
    timeRemaining.textContent = `Time Remaining: ${hour}:${minutes}:${seconds}`;
  } else {
    timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
  }
}

function timer() {
  remainingSeconds--;
  displayTime();
  if (remainingSeconds <= 0) {
    clearInterval(countDown);
    playAlarm();
  }
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
