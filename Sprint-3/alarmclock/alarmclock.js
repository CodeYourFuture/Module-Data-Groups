let inputTime = 0;
let timer = null;
let changeBgColor = false;

function setAlarm() {
  resetState();

  inputTime = Number(document.querySelector("#alarmSet").value);

  if (!Number.isInteger(inputTime) || inputTime < 0) {
    return;
  }
  if (inputTime === 10) {
    changeBgColor = true;
  } else if (inputTime === 0) {
    playAlarm();
  }

  displayTime(inputTime);
  timer = setInterval(countDown, 1000);
}

function displayTime(totalTime) {
  const seconds = totalTime % 60;
  const minutes = (totalTime - seconds) / 60;
  const timeLeft = document.querySelector("#theTime");
  timeLeft.innerText = `${minutes.toString().padStart(2, 0)}:${seconds
    .toString()
    .padStart(2, 0)}`;
}

function countDown() {
  inputTime--;
  if (inputTime >= 0) {
    displayTime(inputTime);
  }

  if (inputTime === 0) {
    playAlarm();
    document.getElementById("alarmSet").value = "";

    if (changeBgColor) {
      changeColor();
      changeBgColor = false;
    }

    clearInterval(timer);
    timer = null;
  }
}

function changeColor() {
  const bgColor = document.querySelector("div");
  bgColor.classList.add("myBgColor");
}

function resetState() {
  if (typeof audio !== "undefined" && audio) {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch (e) {} // audio may not be ready
    audio.loop = false;
  }

  if (timer) {
    clearInterval(timer);
  }

  const container = document.querySelector("div");
  if (container && container.classList.contains("myBgColor")) {
    container.classList.remove("myBgColor");
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
