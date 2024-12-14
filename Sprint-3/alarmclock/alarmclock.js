let timer;
let flashInterval;

function setAlarm() {
  const alarmInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  let timeLeft = parseInt(alarmInput.value);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  updateTimerDisplay(timeLeft);

    timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay(timeLeft);
    } else {
      clearInterval(timer); 
      timeRemaining.textContent = "Time Remaining: 00:00";
      playAlarm(); 
      flashBackground(); 
    }
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    pauseAlarm();
    resetTimerDisplay();
    stopFlashing();
  });
}


function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  document.getElementById("timeRemaining").textContent =
    `Time Remaining: ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function resetTimerDisplay() {
  document.getElementById("timeRemaining").textContent = "Time Remaining: 00:00";
}

function flashBackground() {
  const body = document.body;
  let isFlashing = true;

  flashInterval = setInterval(() => { 
    body.style.backgroundColor = isFlashing ? "red" : "white";
    isFlashing = !isFlashing;
  }, 500);
}

function stopFlashing() {
  clearInterval(flashInterval); 
  document.body.style.backgroundColor = "white";
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
