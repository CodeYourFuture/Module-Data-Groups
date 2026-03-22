let countdownInterval = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let totalSeconds = parseInt(input.value);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }


  if (countdownInterval) clearInterval(countdownInterval);

  function updateHeading() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    heading.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  updateHeading();

  countdownInterval = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      totalSeconds = 0;

      updateHeading();

      clearInterval(countdownInterval);
      playAlarm();
      return;
    }


    updateHeading();
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
