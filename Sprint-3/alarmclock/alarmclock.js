let inputTime = 0;
let timer = null;
let changeBgColor = false;

function setAlarm() {
  inputTime = Number(document.querySelector("#alarmSet").value);

  if (!Number.isInteger(inputTime) || inputTime < 0) {
    return;
  }
  if (inputTime === 10) {
    changeBgColor = true;
  } else if (inputTime === 0) {
    displayTime(inputTime);
    playAlarm();
    document.querySelector("#alarmSet").reset();
  }
  displayTime(inputTime);
  if (typeof audio !== "undefined" && audio) {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch (e) {}
    audio.loop = false; // disable looping if it was set
  }
  if (timer) {
    clearInterval(timer);
  }
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
/*
the the value for time remaining
check its a valid time (greater than 00:00)
decrease value of time remaining by 1 sec for each sec that passes
*/

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
