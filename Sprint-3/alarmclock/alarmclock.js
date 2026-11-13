let timerId = null;
let remaining = 0;

function startCountdown() {
  timerId = setInterval(() => {
    remaining = remaining - 1;
    showTime(remaining);

    if (remaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      playAlarm();
      document.body.classList.add("finished");
    }
  }, 1000);
}

function setAlarm() {
  clearInterval(timerId);
  document.body.classList.remove("finished");
  remaining = Number(document.getElementById("alarmSet").value);
  showTime(remaining);
  startCountdown();
}

function showTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${mm}:${ss}`;
}

function togglePause() {
  const pauseButton = document.getElementById("pause");

  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
    pauseButton.innerText = "Resume";
  } else if (remaining > 0) {
    startCountdown();
    pauseButton.innerText = "Pause";
  }
}

document.getElementById("pause").addEventListener("click", togglePause);

document.getElementById("stop").addEventListener("click", () => {
  document.body.classList.remove("finished");
});

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
