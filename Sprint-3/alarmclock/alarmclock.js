let countdownInterval = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  let totalSeconds = parseInt(input.value);


  if (countdownInterval) clearInterval(countdownInterval);

  const heading = document.getElementById("timeRemaining");

  function updateHeading() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    heading.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  updateHeading();

  countdownInterval = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
      totalSeconds = 0; 
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
