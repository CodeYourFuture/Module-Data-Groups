let countdownInterval;

function setAlarm() {
  clearInterval(countdownInterval);
  document.body.style.backgroundColor = "white";

  let inputTime = Number(document.getElementById("alarmSet").value);

  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please type or select your time 👇⏰");
    return;
  }

  updateDisplay(inputTime);

  countdownInterval = setInterval(() => {
    inputTime--;

    if (inputTime <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0);
      playAlarm();

      let repetitions = 0;
      countdownInterval = setInterval(() => {
        document.body.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
        repetitions++;

        if (repetitions > 100) {
          clearInterval(countdownInterval);
        }
      }, 200);
    } else {
      updateDisplay(inputTime);
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
  audio.currentTime = 0;
  clearInterval(countdownInterval);
}

window.onload = setup;
