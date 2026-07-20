let inputSeconds;
let timer;

function setAlarm() {
    clearInterval(timer);
    pauseAlarm();

    inputSeconds = Number(document.getElementById("alarmSet").value);

    if (isNaN(inputSeconds) || inputSeconds <= 0) {
        return;
    }

    updateDisplay();

    timer = setInterval(() => {
        inputSeconds--;

        updateDisplay();

        if (inputSeconds <= 0) {
            clearInterval(timer);
            playAlarm();
        }
    }, 1000);
}

function updateDisplay() {
    const minutes = Math.floor(inputSeconds / 60);
    const seconds = inputSeconds % 60;

    document.getElementById("timeRemaining").textContent =
        `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
