let timerId;

function setAlarm() {
  let remaining = Number(document.getElementById("alarmSet").value);
  showTime(remaining);

  timerId = setInterval(() => {
    remaining = remaining - 1;
    showTime(remaining);

    if (remaining <= 0) {
      clearInterval(timerId);
      playAlarm();
      document.body.classList.add("finished");
    }
  }, 1000);
}

function showTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${mm}:${ss}`;
}

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
