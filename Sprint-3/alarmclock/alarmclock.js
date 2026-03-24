var audio = new Audio("alarmsound.mp3");

let countdown;

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

function setAlarm() {
  let seconds = parseInt(document.getElementById("alarmSet").value);
  clearInterval(countdown);
  document.getElementById("timeRemaining").textContent =
    "Time Remaining: " + formatTime(seconds);

  countdown = setInterval(() => {
    seconds--;
    document.getElementById("timeRemaining").textContent =
      "Time Remaining: " + formatTime(seconds);

    if (seconds <= 0) {
      clearInterval(countdown);
      document.body.classList.add("alarm-finished")
      playAlarm();
    }
  }, 1000);
}

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
  clearInterval(countdown);
  audio.pause();
  document.body.classList.remove("alarm-finished")
}

window.onload = setup;
