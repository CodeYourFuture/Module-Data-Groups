let myInterval;
function setAlarm() {
  clearInterval(myInterval);
  const userInput = document.querySelector("#alarmSet").value;
  let timeRemaining = Number(userInput);
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid number.");
    return;
  }
  myInterval = setInterval(() => {
    timeRemaining -= 1;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const heading = document.querySelector("#timeRemaining");
    heading.innerText = `Time Remaining:${formattedMinutes}:${formattedSeconds}`;
    if (timeRemaining === 0) {
      playAlarm();
      clearInterval(myInterval);
    }
  }, 1000);
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
