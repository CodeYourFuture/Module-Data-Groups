let countdown;
let isPaused = false;
let timeRemaining;

function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  timeRemaining = parseInt(inputField.value);

  const updateTitle = () => {
    const minutes = String(Math.floor(timeRemaining/60)).padStart(2, '0');
    const seconds = String(timeRemaining % 60).padStart(2, '0');
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
  
// DO NOT EDIT BELOW HERE}

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

module.exports = alarmclock;