let countdown;

function setAlarm() {
  let seconds = document.getElementById("alarmSet").value;

  updateDisplay(seconds);

  countdown = setInterval(() => {
    seconds--;

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let display = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    document.getElementById("timeRemaining").innerText = display;

    if (seconds <= 0) {
      clearInterval(countdown);
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
