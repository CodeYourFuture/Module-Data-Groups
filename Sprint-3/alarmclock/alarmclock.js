let timer; //let here because timer will be assigned a new timeout ID each time.

function setAlarm() {
  let seconds = Number(document.getElementById("alarmSet").value);

  function countdown() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedMinutes = String(minutes).padStart(2, "0");
    let formattedSeconds = String(remainingSeconds).padStart(2, "0");

    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;

    if (seconds === 0) {
      playAlarm();
      return;
    }

    seconds--;
    setTimeout(countdown, 1000);
  }

  countdown();
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
