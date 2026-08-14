function timeConvert(sec) {
  let minutes = String(Math.floor(sec / 60)).padStart(2, "0");
  let seconds = String(sec % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  let remainingSeconds = parseInt(timeInput.value);
  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    alert("Please provide a valid number of seconds");
    return;
  }

  const timeRemaining = document.getElementById("timeRemaining");

  timeRemaining.textContent = `Time Remaining: ${timeConvert(remainingSeconds)}`;

  const timer = setInterval(() => {
    remainingSeconds--;
    const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
    const seconds = String(remainingSeconds - minutes * 60).padStart(2, "0");
    timeRemaining.textContent = `Time Remaining: ${timeConvert(remainingSeconds)}`;
    if (remainingSeconds === 0) {
      playAlarm();
      clearInterval(timer);
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
