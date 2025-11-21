let intervalId;
let seconds;
let timeRemaining = document.getElementById("timeRemaining");
let pause = false;
let setButton = document.getElementById("set");
let pauseAndResumeButton = document.getElementById("pauseAndResume");
let alarmInputField = document.getElementById("alarmInputField");

function calculateAndUpdate(seconds, timeRemaining) {
  let mm = String(Math.floor(seconds / 60)).padStart(2, 0);
  let ss = String(seconds % 60).padStart(2, 0);
  timeRemaining.innerText = `Time Remaining: ${mm}:${ss}`;
}

function countDown() {
  intervalId = setInterval(() => {
    seconds -= 1;
    calculateAndUpdate(seconds, timeRemaining);

    if (seconds <= 0) {
      clearInterval(intervalId);
      playAlarm();
      document.body.classList.add("flash-background");
      pauseAndResumeButton.style.display = "none";
    }
  }, 1000);
}

function setAlarm() {
  seconds = document.getElementById("alarmSet").value;
  timeRemaining = document.getElementById("timeRemaining");

  if (seconds > 0) {
    calculateAndUpdate(seconds, timeRemaining);
    setButton.style.display = "none";
    pauseAndResumeButton.style.display = "block";
    alarmInputField.style.display = "none";
    countDown();
  }
}

document.getElementById("stop").addEventListener("click", () => {
  document.body.classList.remove("flash-background");
  clearInterval(intervalId);
  timeRemaining.innerText = `Time Remaining: 00:00`;
  setButton.style.display = "block";
  pauseAndResumeButton.style.display = "none";
  alarmInputField.style.display = "block";
  pauseAndResumeButton.innerText = "Pause";
  pause = false;
});

document.getElementById("pauseAndResume").addEventListener("click", () => {
  clearInterval(intervalId);
  pause = !pause;
  pause === true
    ? (pauseAndResumeButton.innerText = "Resume")
    : (pauseAndResumeButton.innerText = "Pause");
  if (pause === false) {
    countDown();
  }
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
