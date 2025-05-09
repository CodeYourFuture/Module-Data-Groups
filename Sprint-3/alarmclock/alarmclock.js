
function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}


function setAlarm() {
  const alarmInput = document.querySelector("#alarmSet");
  const interval = setInterval(updateTimer, 1000);
  let timeLeft = alarmInput.value;

  if (isNaN(timeLeft) || timeLeft <= 0) {
    return;
  }
  updateTimer();
  function updateTimer() {
    const remainingTime = document.querySelector(".time-left");

    if (timeLeft <= 0) {
      clearInterval(interval);
      remainingTime.textContent = "00:00";
      alarmInput.value = ''
      playAlarm();
      return;
    }
    let secondsRemaining = getZero(timeLeft % 60);
    let minutesRemaining = getZero(Math.floor(timeLeft / 60));
    remainingTime.textContent = `${minutesRemaining}:${secondsRemaining}`;

    timeLeft -= 1;
  } 
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
let intervalFlash;
const setButton = document.getElementById("set");
const timerBody = document.querySelector(".centre");

function setup() {
  setButton.addEventListener("click", () => {
    setAlarm();
    setButton.setAttribute("disabled", "");
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
    try {
      audio.play();
    } catch (e) {
      console.error('Audio play failed:', e);
      flashScreen(); 
  }
}

function flashScreen() {
  updateTimerColor();
  intervalFlash = setInterval(updateTimerColor, 1000);

  function updateTimerColor() {
    if (timerBody.style.backgroundColor == "red") {
      timerBody.style.backgroundColor = "white";
    }
    else {
      timerBody.style.backgroundColor = "red";
    }
   
  }

}

function pauseAlarm() {
  audio.pause();
  if (document.querySelector(".time-left").textContent == "00:00") {
    setButton.removeAttribute("disabled");
  }
  timerBody.style.backgroundColor = "white";
    if (intervalFlash) {
      clearInterval(intervalFlash); 
      intervalFlash = null; 
    }
}

window.onload = setup;
