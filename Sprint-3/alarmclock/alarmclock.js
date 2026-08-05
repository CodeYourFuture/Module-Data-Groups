let myInterval;
function setAlarm() {
  clearInterval(myInterval);
  pauseAlarm();
  const userInput = document.querySelector("#alarmSet").value;
  let timeRemaining = Number(userInput);
  if (
    isNaN(timeRemaining) ||
    timeRemaining <= 0 ||
    !Number.isInteger(timeRemaining)
  ) {
    alert("Please enter a valid whole number.");
    return;
  }
  updateDisplay(timeRemaining);

  myInterval = setInterval(() => {
    timeRemaining -= 1;
    updateDisplay(timeRemaining);
    if (timeRemaining === 0) {
      playAlarm();
      clearInterval(myInterval);
    }
  }, 1000);
}

function updateDisplay(timeRemaining) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const heading = document.querySelector("#timeRemaining");
  heading.innerText = `Time Remaining:${formattedMinutes}:${formattedSeconds}`;
}

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
