function setAlarm() {
  const timer = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  const inputValue = alarmInput.value.trim();

  if (inputValue === "") {
    timer.textContent = "Time Remaining: 00:00";
    return;
  }
  const minutes = Math.floor(Number(inputValue) / 60);
  const seconds = Number(inputValue) % 60;

  timer.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  return timer.textContent;
}

let countdown;

function startAlarm() {
  const timer = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");

  let remainingSeconds = Number(alarmInput.value);

  if (alarmInput.value.trim() === "" || remainingSeconds <= 0) {
    return;
  }

  clearInterval(countdown);

  function updateDisplay() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    timer.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  updateDisplay();

  countdown = setInterval(() => {
    remainingSeconds--;

    updateDisplay();

    if (remainingSeconds <= 0) {
      playAlarm();
      clearInterval(countdown);
    }
  }, 1000);
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

  document.getElementById("start").addEventListener("click", () => {
    startAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
