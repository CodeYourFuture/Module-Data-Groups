let timerInterval;
let flashInterval;

function setAlarm() {
  const inputElement = document.getElementById("alarmSet");
  const headingElement = document.getElementById("timeRemaining");

  if (!inputElement.value) {
    return;
  }

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  if (flashInterval) {
    clearInterval(flashInterval);
  }

  let timeInSeconds = Number(inputElement.value);

  function updateScreen(secondsRemaining) {
    const minutes = Math.floor(secondsRemaining / 60);

    const seconds = secondsRemaining % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    headingElement.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
  }

  // update when we click set alarm
  updateScreen(timeInSeconds);

  timerInterval = setInterval(() => {
    // Subtract 1 from the time
    timeInSeconds = timeInSeconds - 1;

    // Update the screen with the new time
    updateScreen(timeInSeconds);

    // when we hit zero?
    if (timeInSeconds <= 0) {
      clearInterval(timerInterval);
      playAlarm();
      flashScreen();
    }
  }, 1000);
}

function flashScreen() {
  let flashCount = 0;

  flashInterval = setInterval(() => {
    flashCount++;

    if (document.body.style.backgroundColor === "red") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "red";
    }

    if (flashCount >= 20) {
      clearInterval(flashInterval);
      document.body.style.backgroundColor = "white";
    }
  }, 500);
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
  clearInterval(flashInterval);
  document.body.style.backgroundColor = "white";
}

window.onload = setup;
