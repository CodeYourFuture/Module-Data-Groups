function setAlarm() {}
const display = document.querySelector("#timeRemaining");
const totalSeconds = document.querySelector("#alarmSet");
const setButton = document.querySelector("#set");
const stopButton = document.querySelector("#stop");
let conuntdownInterval;

// time management function
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  return `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

// to clear every change made with conditions
function clearEverything() {
  display.style.color = "black";
  setButton.disabled = false;
  document.body.style.background = "";
}

// button event handler
setButton.addEventListener("click", () => {
  let timeleft = Number(totalSeconds.value);
  setButton.disabled = true;

  // time 0

  if (timeleft <= 0) {
    alert("please enter a number greater than 0!");
    return;
  }

  display.textContent = formatTime(timeleft);

  conuntdownInterval = setInterval(() => {
    if (timeleft == 0) {
      clearInterval(conuntdownInterval);
      document.body.style.backgroundColor = "grey";
      playAlarm();
    }

    if (timeleft <= 10) {
      display.style.color = "red";
    }

    if (timeleft >= 0) {
      display.textContent = formatTime(timeleft);
      timeleft--;
    }
  }, 1000);
});

//stop button clicked
stopButton.addEventListener("click", () => {
  clearInterval(conuntdownInterval);
  clearEverything();
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
