let countdown = null;
let remainingSeconds = 0;

var audio = new Audio("alarmsound.mp3");
audio.loop = true;
audio.currentTime = 0;


function setAlarm() {
  const input = document.getElementById("alarmSet");
  const timeText = document.getElementById("timeRemaining");

  const seconds = parseInt(input.value, 10);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Enter a number greater than 0");
    return;
  }

  // Stop any previous countdown
  if (countdown !== null) {
    clearInterval(countdown);
  }

  remainingSeconds = seconds;
  updateTimeDisplay();

  countdown = setInterval(() => {
    remainingSeconds--;

    updateTimeDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(countdown);
      countdown = null;
      playAlarm();
      document.body.style.backgroundColor = "#f99"; // change background
    }
  }, 1000);
}

function updateTimeDisplay() {
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${minutes}:${seconds}`;
}
  document.getElementById("stop").addEventListener("click", () => {
    document.body.style.backgroundColor = ""; // reset background
  });

// DO NOT EDIT BELOW HERE


function pauseAlarm() {
  audio.pause();
}
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


window.onload = setup;
