botton = document.getElementById("set");
//begins the count down
botton.addEventListener("click", setAlarm);

// document.getElementById("set").addEventListener("click", setAlarm);
const timeRemaining = document.getElementById("timeRemaining");
function setAlarm() {
  // gets the value of the input field and stores it in a variable
  let timeInSeconds = document.getElementById("alarmSet").value;
  botton.disabled = true;

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

    timeInSecond = timeInSeconds--;
    if (timeInSeconds == 0) {
      clearInterval(clock);
      playAlarm();
      botton.disabled = false;
    }
    timeRemaining.innerHTML =
      "time remaining  " + formatTimeDisplay(timeInSeconds);
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
