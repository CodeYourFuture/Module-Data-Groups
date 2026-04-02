const startButton = document.getElementById("set");
const pause = document.getElementById("stop");
pause.hidden = true;
//begins the count down

// document.getElementById("set").addEventListener("click", setAlarm);
const timeRemaining = document.getElementById("timeRemaining");
function setAlarm() {
  // gets the value of the input field and stores it in a variable
  let timeInSeconds = document.getElementById("alarmSet").value;
  let clock = setInterval(() => {
    function pad(num) {
      return num.toString().padStart(2, "0");
    }

    function formatTimeDisplay(timeInSeconds) {
      const remainingSeconds = timeInSeconds % 60;
      const totalMinutes = (timeInSeconds - remainingSeconds) / 60;
      const remainingMinutes = totalMinutes % 60;
      const totalHours = (totalMinutes - remainingMinutes) / 60;

      return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
    }
    startButton.hidden = true;
    pause.hidden = false;
    timeInSeconds--;
    if (timeInSeconds <= 0) {
      clearInterval(clock);
      playAlarm();
    }

    timeRemaining.innerHTML =
      "time remaining  " + formatTimeDisplay(timeInSeconds);
  }, 1000);
  startButton.addEventListener("click", setAlarm);
  pause.addEventListener("click", pauseWhenRunning);

  function pauseWhenRunning() {
    startButton.hidden = false;
    pause.hidden = true;
    clearInterval(clock);
    document.getElementById("alarmSet").value = timeInSeconds;
    audio.pause();
  }
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
