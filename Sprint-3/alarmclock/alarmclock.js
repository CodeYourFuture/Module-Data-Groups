function setAlarm() {
  let seconds = document.getElementById("alarmSet").value;
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  document.getElementById("timeRemaining").textContent =
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");
  const timer = setInterval(() => {
    seconds--;
    minutes = Math.floor(seconds / 60);
    remainingSeconds = seconds % 60;
    document.getElementById("timeRemaining").textContent =
      "Time Remaining: " +
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0");
    if (seconds === 0) {
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
