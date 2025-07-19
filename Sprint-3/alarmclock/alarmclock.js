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

  if (isNaN(seconds) || seconds <= 0 || input.value.trim() === "") {
    alert("Please enter a valid number!");
    return;
  }


  clearInterval(countdownInterval);
  updateDisplay(seconds);

  countdownInterval = setInterval(() => {
    seconds--;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0);
      playAlarm();
      document.body.style.backgroundColor = "red";
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

var audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdownInterval);
    pauseAlarm();
    document.body.style.backgroundColor = "white";
    document.getElementById("timeRemaining").textContent = "Time Remaining: 00:00";
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
