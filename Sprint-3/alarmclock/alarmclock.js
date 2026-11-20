function setAlarm() {}
let timer;
function formatTime(totalSeconds) {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  return (
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
  );
}
function setAlarm() {
  clearInterval(timer);
  let seconds = Number(document.getElementById("alarmSet").value);
  const title = document.getElementById("timeRemaining");

  if (!(seconds > 0)) {
    title.innerText = "Time Remaining: 00:00";
    return;
  }

  title.innerText = "Time Remaining: " + formatTime(seconds);

  timer = setInterval(() => {
    seconds = seconds - 1;
    title.innerText = "Time Remaining: " + formatTime(seconds);

    if (seconds <= 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

let audio = new Audio("alarmsound.mp3");

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
