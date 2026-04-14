let countdown;

// reset before starting new countdown
function resetAlarm() {
  clearInterval(countdown);
  audio.pause();
  document.getElementById("timeRemaining").textContent = "Time Remaining: 00:00";
  document.body.classList.toggle("alarm-activated", false);
}

function setAlarm() {
  let seconds = parseInt(document.getElementById("alarmSet").value);

  if (!seconds || seconds < 1) {
    alert("The number of seconds must be more than 0 please");
    return;
  }
  function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  updateDisplay(); // update immediately on click

  // code to reset background
    function pauseAlarm() {
      audio.pause();
      document.body.classList.toggle("alarm-activated", false);
    }

  countdown = setInterval(() => {
    seconds--;
    updateDisplay();

    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
      document.body.classList.toggle("alarm-activated", true);
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

window.onload = setup;
