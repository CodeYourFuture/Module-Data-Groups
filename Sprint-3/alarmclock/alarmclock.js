const input = document.querySelector("#alarmSet");
let timeRemainingEl = document.querySelector("#timeRemaining");
function setAlarm() {
  if (!input.value) {
    alert("Enter minutes");
    return;
  }
  givenTime = Number(input.value);
  updateTime();
  clearInterval(timerId);
  timerId = setInterval(() => {
    givenTime = givenTime - 1;
    updateTime();
    if (givenTime <= 0) {
      clearInterval(timerId);
      playAlarm();
      return;
    }
  }, 1000);
}
let timerId;
let givenTime;
function formatTime(givenTime) {
  let seconds = givenTime % 60;
  let minutes = Math.floor(givenTime / 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateTime() {
  timeRemainingEl.textContent = `Time Remaining: ${formatTime(givenTime)}`;
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
