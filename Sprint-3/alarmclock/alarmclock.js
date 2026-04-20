const state = {
  remainingTime: 0,
  timerId: null,
};

function setAlarm() {
  if (state.timerId !== null) {
    clearInterval(state.timerId);
    state.timerId = null;
  }

  const existingMessage = document.getElementById("error-message");
  if (existingMessage) {
    existingMessage.remove();
  }
  const displayedTime = document.getElementById("timeRemaining");
  const timeInput = document.getElementById("alarmSet");

  state.remainingTime = +timeInput.value;
  if (state.remainingTime <= 0 || !Number.isInteger(state.remainingTime)) {
    state.remainingTime = 0;
    displayedTime.textContent = `Time Remaining: 00:00`;
    timeInput.value = "";

    const container = document.querySelector(".centre");
    const errorMessage = document.createElement("p");
    errorMessage.id = "error-message";
    errorMessage.textContent = "Please enter a positive whole number";
    errorMessage.style.color = "red";
    container.appendChild(errorMessage);
    return;
  }
  const formattedTime = formatTime(state.remainingTime);
  timeInput.value = "";

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

  if (state.remainingTime <= 0) {
    state.remainingTime = 0;
    displayedTime.textContent = `Time Remaining: 00:00`;
    clearInterval(state.timerId);
    state.timerId = null;
    document.body.style.backgroundColor = "red";
    playAlarm();
    return;
  }
  const countingDownTime = formatTime(state.remainingTime);
  displayedTime.textContent = `Time Remaining: ${countingDownTime}`;
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
