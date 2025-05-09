function setAlarm() {
  let timeInput = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let seconds = parseInt(timeInput);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  let countdown;

  function updateDisplay() {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    timeRemaining.innerText = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  updateDisplay();

  countdown = setInterval(() => {
    seconds--;
    updateDisplay();

    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdown);
    pauseAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    clearInterval(countdown);
  });

  document.getElementById("resume").addEventListener("click", () => {
      countdown = setInterval(() => {
        seconds--;
        updateDisplay();

        if (seconds <= 0) {
          clearInterval(countdown);
          playAlarm();
        }
      }, 1000);
  });
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