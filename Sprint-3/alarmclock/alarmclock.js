let countdown;

function setAlarm() {
  let seconds = parseInt(document.getElementById("alarmSet").value);

  clearInterval(countdown);
  updateDisplay(seconds);

  countdown = setInterval(() => {
    seconds--;

    updateDisplay(seconds);

    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

function updateDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  let display = `Time Remaining: ${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

  document.getElementById("timeRemaining").innerText = display;
}



// DO NOT EDIT BELOW HERE

let audio = new Audio("assets/trebolClan.mp3");
let stopAudio = new Audio("assets/stopAlarm.mp3");

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
  stopAudio.play();
  clearInterval(countdown);
}

window.onload = setup;


