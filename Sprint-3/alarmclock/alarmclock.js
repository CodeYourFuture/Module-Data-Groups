let activeIntervalId = null; 

function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");

  let time = parseInt(inputField.value, 10);

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  if (activeIntervalId !== null) {
    clearInterval(activeIntervalId);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  timeRemaining.innerText = `Time Remaining: ${formatTime(time)}`;

  activeIntervalId = setInterval(() => {
    time -= 1;
    timeRemaining.innerText = `Time Remaining: ${formatTime(time)}`;

    if (time <= 0) {
      clearInterval(activeIntervalId);
      activeIntervalId = null;
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
