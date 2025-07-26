let timerId = null;
let flashingInterval = null;
let paused = false;
let timeLeft = 0;
let audio;

const formatTime = (seconds) => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `Time Remaining: ${minutes}:${secs}`;
};

const updateTimeDisplay = (seconds) => {
  const heading = document.getElementById("timeRemaining");
  heading.innerText = formatTime(seconds);
};

function setAlarm() {
  const input = document.getElementById("alarmSet");
  timeLeft = parseInt(input.value, 10);
  const display = document.getElementById("timeRemaining");

  if (timerId) {
    clearInterval(timerId);
  }

  if (isNaN(timeLeft) || timeLeft <= 0) {
    display.innerText = "Please enter a valid time.";
    return;
  }

  updateTimeDisplay(timeLeft);
  paused = false;
  document.getElementById("stop").disabled = false;
  document.getElementById("resume").disabled = true;

  timerId = setInterval(() => {
    if (paused) return;

    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      updateTimeDisplay(0);
      playAlarm();
      flashBackground();
  
      return;
    }
        updateTimeDisplay(timeLeft);
  }, 1000);
}

      //document.getElementById("alarmSet").value = "";
      //document.getElementById("alarmSet").disabled = false;
      //document.getElementById("set").disabled = false;

function pauseAlarm() {
  if (!paused) {
    paused = false;
    audio.pause();
    clearInterval(flashingInterval);
    document.body.classList.remove("flash");
    document.getElementById("stop").disabled = true;
    document.getElementById("resume").disabled = false;
  }
}

function resumeAlarm() {
  if (paused) {
    paused = false;
    audio.play();
    document.getElementById("stop").disabled = false;
    document.getElementById("resume").disabled = true;
  }
}

function playAlarm() {
  audio.loop = true;
  audio.play();
}

function flashBackground() {
  document.body.classList.add("flash");
  flashingInterval = setInterval(() => {
    document.body.classList.toggle("flash");
  }, 500);
}

function setup() {
  audio = document.getElementById("alarmAudio");
  if (!audio) {
    console.warn("Alarm audio element not found.");
    return;
  }

  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
  document.getElementById("resume").addEventListener("click", resumeAlarm);
}

// Attach setup on page load
if (typeof window !== "undefined") {
  window.onload = setup;
  window.setup = setup;
  window.setAlarm = setAlarm;
  window.pauseAlarm = pauseAlarm;
  window.resumeAlarm = resumeAlarm;
  window.playAlarm = playAlarm;
  window.flashBackground = flashBackground;
  window.updateTimeDisplay = updateTimeDisplay;
  window.formatTime = formatTime;
}

// module.exports = {
  setup,
  setAlarm,
  pauseAlarm,
  resumeAlarm,
  playAlarm,
  flashBackground,
  updateTimeDisplay,
  formatTime,
};
