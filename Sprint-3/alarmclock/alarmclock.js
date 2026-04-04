let interval;
let timeRemaining = 0;
let flashInterval;

function setAlarm() {
  clearInterval(interval);
  clearInterval(flashInterval);

  const input = document.getElementById("alarmSet");
  const display = document.getElementById("timeRemaining");

  timeRemaining = parseInt(input.value);

  if (isNaN(timeRemaining) || timeRemaining <= 0) return;
  updateDisplay();

  interval = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(interval);
      timeRemaining = 0;
      updateDisplay();
      playAlarm();
      // Start flashing background
      flashInterval = setInterval(() => {
        document.body.style.backgroundColor =
          document.body.style.backgroundColor === "green" ? "white" : "green";
      }, 500);
      const stopButton = document.getElementById("stop");
      stopButton.addEventListener(
        "click",
        () => {
          clearInterval(flashInterval);
          document.body.style.backgroundColor = "white";
        },
        { once: true }
      );

      return;
    }

    // Decrement only if above 0

    timeRemaining--;

    updateDisplay();
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
