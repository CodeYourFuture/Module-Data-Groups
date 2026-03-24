let alarmInterval;

function setAlarm() {
  clearInterval(alarmInterval);
  let timeRemaining = document.getElementById("alarmSet");
  const display = document.getElementById("timeRemaining");
  //what ever we input is turned into seconds
  let totalSeconds = parseInt(timeRemaining.value);

  if (isNaN(totalSeconds) || totalSeconds <= 0) return;

  const formattedTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  display.innerHTML = `Time Remaining: ${formattedTime(totalSeconds)}`;

  alarmInterval = setInterval(() => {
    totalSeconds--;

    display.innerHTML = `Time Remaining: ${formattedTime(totalSeconds)}`;

    if (totalSeconds <= 0) {
      clearInterval(alarmInterval);
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
