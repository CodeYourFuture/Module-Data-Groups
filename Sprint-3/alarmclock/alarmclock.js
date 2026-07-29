const timeRemaining = document.getElementById("timeRemaining");
let timer;

function setAlarm() {
    const alarmSetInput = document.getElementById("alarmSet");
    let seconds = Number(alarmSetInput.value);

    if (seconds <= 0 || isNaN(seconds)) {
        alert("Please enter a valid number.");
        return;
    }

    // Stop a previous countdown if there is one
    clearInterval(timer);

    timer = setInterval(() => {

        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;

        timeRemaining.textContent =
            `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

        if (seconds <= 0) {
            clearInterval(timer);
            playAlarm();
            return;
        }

        seconds--;

    }, 1000);
}

document.getElementById("set").addEventListener("click", setAlarm);

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

