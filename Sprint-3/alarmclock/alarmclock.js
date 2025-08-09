let countdown; // just to make it avails for later
let isPaused = false; // start off false so the timer is not paused
let timeRemaining; // time remaining in seconds

function setAlarm() {
  const inputField = document.getElementById("alarmSet"); //get input
  timeRemaining = parseInt(inputField.value); //set time remaining in seconds

  const updateTitle = () => {
    const minutes = String(Math.floor(timeRemaining/60)).padStart(2, '0'); // minutes
    const seconds = String(timeRemaining % 60).padStart(2, '0'); // seconds
    document.getElementById("timeRemaining").innerText = `Time Remaining: ${minutes}:${seconds}`;
  };

  updateTitle();

  countdown = setInterval(() => {
   if (!isPaused){ 
    timeRemaining = timeRemaining - 1;
    updateTitle();

    if (timeRemaining <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }
  }, 1000);
}

function pauseTimer() {
  isPaused = !isPaused;
  document.getElementById("pause").innerText = isPaused ? "Resume Timer" : "Pause Timer";
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

  document.getElementById("pause").addEventListener("click", () => {
    pauseTimer();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
