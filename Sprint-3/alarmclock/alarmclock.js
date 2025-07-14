let countdownInterval;

function updateDisplay(seconds) {
   const timeDisplay = document.getElementById("timeRemaining");
     const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
     const remainingSeconds = String(seconds % 60).padStart(2, "0");

     timeDisplay.textContent = `Time Remaining: ${minutes}:${remainingSeconds}`;
}



function setAlarm() {
  const input = document.getElementById("alarmSet");
  let seconds  = parseInt(input.value, 10);

  countdownInterval = setInterval(() => {
    seconds--;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0);
      return;
    }

    updateDisplay(seconds);
  }, 1000);

}

document.getElementById("set").addEventListener("click", setAlarm);

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(countdownInterval);
});

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
