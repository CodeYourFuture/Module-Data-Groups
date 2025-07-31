let countdownInterval;

function setAlarm() {
  const inputArea = document.getElementById("alarmSet");

  if (Number(inputArea.value)=="number")  inputArea.value=0;
  document.getElementById("set").disabled = true;
  let remaining = Math.round(Number(inputArea.value));

  if (isNaN(remaining) || remaining <= 0) return;

  updateDisplay(remaining); // update first time immediately

  countdownInterval = setInterval(() => {
    remaining--;
    updateDisplay(remaining);

    if (remaining <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
      document.getElementById("set").disabled = false;
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const countDown = document.getElementById("timeRemaining");
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  countDown.innerText = `Time Remaining: ${minutes}:${secs}`;
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
