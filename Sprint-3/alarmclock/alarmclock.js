let countdown;

function setAlarm() {
  clearInterval(countdown);

  let timeRemaining = document.getElementById("alarmSet").value;
  timeRemaining = parseInt(timeRemaining);

  if (isNaN(timeRemaining) || timeRemaining <= 0) return;

  countdown = setInterval(function () {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById("timeRemaining").innerText = `Time Remaining: ${
      minutes.toString().padStart(2, "0")
    }:${seconds.toString().padStart(2, "0")}`;

    timeRemaining--; // Decrement first to avoid going negative

    if (timeRemaining < 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(countdown);
  pauseAlarm();
});

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
