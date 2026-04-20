function setAlarm() {}

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

function setAlarm() {
  const timeInput = document.getElementById("alarmSet");

  const seconds = timeInput.value;
  const remainingSeconds = seconds % 60;

  const minutes = (seconds - remainingSeconds) / 60;

  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const remainingTime = document.getElementById("timeRemaining");
  remainingTime.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
  console.log(remainingTime);
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
