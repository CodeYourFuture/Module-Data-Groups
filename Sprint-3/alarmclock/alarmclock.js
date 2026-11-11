let countdownTimer;
let flashTimer;
let currentSeconds;

function setAlarm() {
  clearInterval(countdownTimer);
  // fetch seconds input
  currentSeconds = Number(document.getElementById("alarmSet").value);
  document.body.style.backgroundImage = "url('alarmsethamster.jfif')";
  document.body.style.backgroundPosition = "centre";
  // set time remaining to seconds input
  document.getElementById("timeRemaining").textContent =
    `Time Remaining: ${formatTime(currentSeconds)}`;

  // handling the interval and alarm end
  countdownTimer = setInterval(() => {
    currentSeconds = currentSeconds - 1;

    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${formatTime(currentSeconds)}`;

    if (currentSeconds <= 0) {
      clearInterval(countdownTimer);
      playAlarm();
      document.getElementById("timeRemaining").textContent =
        `Time Remaining: 00:00`;
      
      // img change
      document.body.style.backgroundImage = "url('alarmplaysoundhamster.jfif')";
      document.body.style.backgroundPosition = "centre";

      // box turns red
      const box = document.querySelector(".centre");
      flashTimer = setInterval(() => {
        box.classList.toggle("red-bg");
      }, 500);
    }
  }, 1000);
}

function formatTime(totalSeconds) {
  // converts the seconds to minutes and seconds and returns "mm:ss"
  const convertToMinutes = Math.floor(totalSeconds / 60);
  const remainderSeconds = totalSeconds % 60;
  const paddedMinutes = String(convertToMinutes).padStart(2, "0");
  const paddedSeconds = String(remainderSeconds).padStart(2, "0");
  return `${paddedMinutes}:${paddedSeconds}`;
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

window.onload = setup;

document.getElementById("stop").addEventListener("click", () => {
  document.body.style.backgroundImage = "url('alarmsethamster.jfif')";
  document.body.style.backgroundPosition = "centre";
  clearInterval(countdownTimer);
  clearInterval(flashTimer);
});