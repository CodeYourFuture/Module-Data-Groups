function setScreenTimer(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeRemainingSpan = document.querySelector("#timeRemaining span");
  timeRemainingSpan.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setAlarm() {
  const alarmSet = document.getElementById("alarmSet");
  let totalSeconds = Number(alarmSet.value);
  if (totalSeconds <= 0) {
    alert("Input must be more than 0");
    alarmSet.value = "";
    return;
  }

  setScreenTimer(totalSeconds);

  const timer = setInterval(() => {
    totalSeconds--;
    if (totalSeconds <= 0) {
      setScreenTimer(0);
      clearInterval(timer);
      playAlarm();
    } else {
      setScreenTimer(totalSeconds);
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
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
