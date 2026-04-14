let countdownInterval;
let flashInterval;

let audio = new Audio("assets/trebolClan.mp3");
let stopAudio = new Audio("assets/stopAlarm.mp3");

// helper to reset the app to its initial state
function resetApp() {
  clearInterval(countdownInterval);
  clearInterval(flashInterval);
  document.body.style.backgroundColor = "white";


  if(audio){
    audio.pause();
    audio.currentTime = 0;
  }
}

//function to changing colors animation.
function startBackgroundAnimation() {
  let repetitions = 0;
  flashInterval = setInterval(() => {
    document.body.style.backgroundColor = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)})`;

    repetitions++;
    if (repetitions > 100) {
      clearInterval(flashInterval);
      document.body.style.backgroundColor = "white";
    }
  }, 200);
}


function setAlarm() {
  resetApp();

  const rawValue = document.getElementById("alarmSet").value;
  const inputTime = Number(rawValue);

  if (!Number.isInteger(inputTime) || inputTime <= 0) {
    alert("Please type or select a valid positive time in seconds 👇⏰");
    return;
  }

  let timeLeft = inputTime;
  updateDisplay(timeLeft);

  countdownInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0);
      playAlarm();

      startBackgroundAnimation();
      
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
