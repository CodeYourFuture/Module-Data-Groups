function setAlarm() {}
const display = document.querySelector("#timeRemaining");
const totalSeconds = document.querySelector("#alarmSet");
const setButton = document.querySelector("#set");
const stopButton = document.querySelector("#stop");
let conuntdownInterval;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  return `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function reset() {
  clearInterval(conuntdownInterval);
  display.textContent = "Time Remaining: 00:00";
  display.style.color = "black";
  setButton.disabled = false;
  document.body.style.background = "";
}
let countdownInterval;
setButton.addEventListener("click", () => {
  let timeleft = Number(totalSeconds.value);

  if (timeleft <= 0 || isNaN(timeleft)) {
    alert("please enter a number greater than zero (0)!");
    return;
  }
  setButton.disabled = true;

  display.textContent = formatTime(timeleft);

  const warningTime = 10; // seconds
  clearInterval(conuntdownInterval);

  conuntdownInterval = setInterval(() => {
    timeleft--;

    if (timeleft >= 0) {
      display.textContent = formatTime(timeleft);
    }

    if (timeleft <= warningTime) {
      display.style.color = "red";
    }

    if (timeleft <= 0) {
      clearInterval(conuntdownInterval);
      document.body.style.backgroundColor = "grey";
      playAlarm();
    }
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(conuntdownInterval);
  reset();
  pauseAlarm();
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
