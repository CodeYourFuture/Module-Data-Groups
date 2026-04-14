let countdownInterval;

// helper to reset the app to its initial state
function resetApp() {
  clearInterval(countdownInterval);
  document.body.style.backgroundColor = "white";
  audio.pause();
  audio.currentTime = 0;
}

function setAlarm() {
  resetApp();

  const rawValue = document.getElementById("alarmSet").value;
  const inputTime = Number(rawValue);

  if (rawValue === "" || !Number.isInteger(inputTime) || inputTime <= 0) {
    alert("Please type or select a valid positive time in seconds 👇⏰");
    return;
  }

  let timeLeft = inputTime;

  updateDisplay(timeLeft);

  let remainingTime = inputTime;

  countdownInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
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
          resetApp();
        }
      }, 200);
    } else {
      updateDisplay(timeLeft);
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  const display = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;

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
  resetApp();
  stopAudio.play();
}

window.onload = setup;
