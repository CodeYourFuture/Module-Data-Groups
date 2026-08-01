const timeRemaining = document.getElementById("timeRemaining");
let timer;
let seconds;

function setAlarm() {
    const alarmSetInput = document.getElementById("alarmSet");
    seconds = Number(alarmSetInput.value);


    if (seconds <= 0 || isNaN(seconds)) {
        alert("Please enter a valid number.");
        return;
    }

    // Stop a previous countdown if there is one
    clearInterval(timer);

    // Run immediately
    decrementTimer();

    // decrement each second
    timer = setInterval(() => decrementTimer(), 1000);
}

function decrementTimer()
{
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  timeRemaining.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  if (seconds <= 0) {
    clearInterval(timer);
    playAlarm();
    return;
  }

  seconds--;
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

