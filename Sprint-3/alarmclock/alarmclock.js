function setAlarm() {
  const timeSubmitted = document.getElementById("alarmSet").value;
  let numberForTime = Number(timeSubmitted);

  if (numberForTime <= 0 || Number.isInteger(numberForTime) === false) {
    return (document.getElementById("reminder").textContent =
      "Value of time should be more than '0'.");
  }

  document.getElementById("reminder").textContent = "";
  function updateDisplay(totalSeconds) {
    const minutes = Math.floor(numberForTime / 60);
    const seconds = numberForTime % 60;
    const minutesInString = String(minutes).padStart(2, "0");
    const secondsInString = String(seconds).padStart(2, "0");

    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${minutesInString}:${secondsInString}`;
  }

  updateDisplay(numberForTime);

  const countdownId = setInterval(() => {
    numberForTime -= 1;
    updateDisplay(numberForTime);

    if (numberForTime <= 0) {
      clearInterval(countdownId);
      playAlarm();
    }
  }, 1000);
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
