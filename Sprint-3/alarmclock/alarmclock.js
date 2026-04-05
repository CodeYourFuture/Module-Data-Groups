let timer;

function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let timeLeft = Number(input);

  updateDisplay(timeLeft);

  if (input === "" || isNaN(timeLeft)) {
    return;
  }

  if (timeLeft < 0) {
    return;
  }

  updateDisplay(timeLeft);

  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;

    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      playAlarm();
      document.body.style.backgroundColor = "red";
    }
  }, 1000);
}

function updateDisplay(secondsLeft) {
  const heading = document.getElementById("timeRemaining");

  if (secondsLeft < 0) {
    secondsLeft = 0;
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  heading.innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
