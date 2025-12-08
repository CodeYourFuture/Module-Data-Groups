function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let seconds = Number(input.value);

  function updateDisplay(remainingSeconds) {
    const minutes = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    heading.textContent = `Time Remaining: ${formattedTime}`;
    document.body.style.backgroundColor = "";
  }

  // Set initial display
  updateDisplay(seconds);

  // Start countdown
  const timerId = setInterval(() => {
    seconds--;
    updateDisplay(seconds);

    if (seconds <= 0) {
      clearInterval(timerId);
      playAlarm();
      document.body.style.backgroundColor = "red";
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
