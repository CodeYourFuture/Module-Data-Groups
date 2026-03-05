let intervalId = null;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let value = input.value

  if (value === "") {
    heading.innerText = "Please enter a number of seconds.";
    return;
  }

  let remainingSeconds = Number(value);

  if (remainingSeconds <= 0 || isNaN(remainingSeconds)) {
    heading.innerText = "Please enter a positive number greater than 0.";
    return;
  }

  heading.innerText = `Time Remaining: ${formatTime(remainingSeconds)}`;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    remainingSeconds -= 1;
    
    if (remainingSeconds <= 0) {
      heading.innerText = `Time Remaining: ${formatTime(0)}`;
      playAlarm();
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    heading.innerText = `Time Remaining: ${formatTime(remainingSeconds)}`;
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
