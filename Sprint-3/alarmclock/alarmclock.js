function setAlarm() {}

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

const state = {
  initialTime: 0,
  remainingTime: 0,
  timerId: null,
};

function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  state.initialTime = +timeInput.value;
  state.remainingTime = state.initialTime;
  const formattedTime = formatTime(state.initialTime);
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

  console.log(state.remainingTime);
  if (state.remainingTime === 0) {
    clearInterval(state.timerId);
    state.timerId = null;
    document.body.style.backgroundColor = "red";
    playAlarm();
  } else {
    state.remainingTime -= 1;
    const countingDownTime = formatTime(state.remainingTime);
    displayedTime.textContent = `Time Remaining: ${countingDownTime}`;
  }
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  document.body.style.backgroundColor = "white";
  audio.pause();
}

window.onload = setup;
