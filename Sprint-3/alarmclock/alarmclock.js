function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  let remainingTime = Number(timeInput.value);

  if (!timeInput.value || remainingTime <= 0) {
    alert("Please set a valid time!");
    return;
  }

  const timeRemainingDisplay = document.getElementById("timeRemaining");

  timeRemainingDisplay.innerText = `Time Remaining: ${formatTime(remainingTime)}`;
  const countdownInterval = setInterval(() => {
    remainingTime -= 1;
    if (remainingTime === 0) {
      playAlarm();
      clearInterval(countdownInterval);
    }
    timeRemainingDisplay.innerText = `Time Remaining: ${formatTime(remainingTime)}`;
  }, 1000);
}
function formatTime(seconds) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
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
