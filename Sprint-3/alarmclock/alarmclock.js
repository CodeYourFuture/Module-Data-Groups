let interval;
let timeRemaining = 0;

function setAlarm() {
  clearInterval(interval);

  const input = document.getElementById("alarmSet");
  const display = document.getElementById("timeRemaining");

  timeRemaining = parseInt(input.value);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    return;
  }

  updateDisplay();

  interval = setInterval(() => {
    timeRemaining--;

    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(interval);
      timeRemaining = 0;
      updateDisplay();
      playAlarm();
      return;

      let flashInterval = setInterval(() => {
            document.body.style.backgroundColor =
                document.body.style.backgroundColor === "green" ? "white" : "green";
        }, 500);
        timeRemaining --;
        updateDisplay();
    }
  }, 1000);
function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    display.textContent = `Time Remaining: ${mm}:${ss}`;
  }
  
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
