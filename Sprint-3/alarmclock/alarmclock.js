let timer;
function setAlarm() {
  const input = document.getElementById("alarmSet");
  let seconds = Number(input.value);

  const timeRemaining = document.getElementById("timeRemaining");

  clearInterval(timer);

  function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime =
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0");

    timeRemaining.textContent = `Time Remaining: ${formattedTime}`;
  }

  updateDisplay();

  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateDisplay();
    } else {
      clearInterval(timer);
      playAlarm();
      document.body.style.backgroundColor = "red";
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
