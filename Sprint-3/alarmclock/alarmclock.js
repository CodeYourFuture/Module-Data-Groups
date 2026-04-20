const state = {
  remainingTime: 0,
  timerId: null,
};

function setAlarm() {
  if (state.timerId !== null) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
  const timeInput = document.getElementById("alarmSet");
  state.remainingTime = +timeInput.value;
  const formattedTime = formatTime(state.remainingTime);
  timeInput.value = "";

  const displayedTime = document.getElementById("timeRemaining");
  displayedTime.textContent = `Time Remaining: ${formattedTime}`;

  state.timerId = setInterval(timer, 1000);
}

function formatTime(seconds) {
  const remainingSeconds = seconds % 60;
  const minutes = (seconds - remainingSeconds) / 60;

  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

function timer() {
  const displayedTime = document.getElementById("timeRemaining");
  state.remainingTime -= 1;
  const countingDownTime = formatTime(state.remainingTime);
  displayedTime.textContent = `Time Remaining: ${countingDownTime}`;
  if (state.remainingTime === 0) {
    clearInterval(state.timerId);
    state.timerId = null;
    document.body.style.backgroundColor = "red";
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
  document.body.style.backgroundColor = "white";
  audio.pause();
}

window.onload = setup;
