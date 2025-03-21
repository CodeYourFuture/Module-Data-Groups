function startCountdown() {
  const input = document.querySelector('#alarmSet');
  const heading = document.querySelector('#timeRemaining');
  let timeRemaining = parseInt(input.value);
  let countdown;

  function updateDisplay() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
    const seconds = String(timeRemaining % 60).padStart(2, '0');
    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }

  function startTimer() {
    clearInterval(countdown);
    timeRemaining = parseInt(input.value);
    updateDisplay();

    countdown = setInterval(() => {
      if (timeRemaining <= 0) {
        clearInterval(countdown);
        playAlarm();
      } else {
        timeRemaining--;
        updateDisplay();
      }
    }, 1000);
  }

  document.querySelector('#set').addEventListener('click', startTimer);

  updateDisplay();
}

function playAlarm() {
  const audio = new Audio('alarm.mp3');
  audio.play();
}

startCountdown();


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
