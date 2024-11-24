
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
