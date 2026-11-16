let flashTimer;
let timer;
let seconds;
let paused = false;
window.addEventListener("load", () => {
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(flashTimer);
    document.body.style.backgroundColor = "";
  });
  document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timer);
    paused = true;
  });
});
function setAlarm() {
  clearInterval(timer);
  if (!paused) {
    seconds = document.getElementById("alarmSet").value;
  }
  paused = false;
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  document.getElementById("timeRemaining").textContent =
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");
  timer = setInterval(() => {
    seconds--;
    minutes = Math.floor(seconds / 60);
    remainingSeconds = seconds % 60;
    document.getElementById("timeRemaining").textContent =
      "Time Remaining: " +
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0");
    if (seconds === 0) {
      clearInterval(timer);
      playAlarm();
      flashTimer = setInterval(() => {
        document.body.style.backgroundColor =
          document.body.style.backgroundColor === "red" ? "white" : "red";
      }, 500);
      setTimeout(() => {
        clearInterval(flashTimer);
      }, 3000);
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
