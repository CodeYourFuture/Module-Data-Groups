let intervalId = null;

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function setAlarm() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  const input = document.getElementById("alarmSet");
  let remaining = Number(input.value);

<<<<<<< Updated upstream
  if (!Number.isFinite(remaining) || remaining <= 0) {
=======
   if (!Number.isFinite(remaining) || remaining < 0) {
>>>>>>> Stashed changes
    return;
  }

  const heading = document.getElementById("timeRemaining");
  heading.textContent = `Time Remaining: ${formatTime(remaining)}`;
<<<<<<< Updated upstream
  input.value = "";
=======
>>>>>>> Stashed changes

  intervalId = setInterval(() => {
    remaining -= 1;
    heading.textContent = `Time Remaining: ${formatTime(remaining)}`;

    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
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
    document.body.style.backgroundColor = "white";
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
