const userInput = document.querySelector("#alarmSet");
const timeRemaining = document.querySelector("#timeRemaining");
const stop = document.querySelector("#stop");
let totalSeconds = 0;

function main() {
  document.getElementById("alarmSet").addEventListener("click", counterUpdate);
  document.getElementById("alarmSet").addEventListener("keyup", counterUpdate);
}

function counterUpdate() {
  const userInputValue = userInput.value;
  if (userInputValue >= 0) {
    totalSeconds = userInputValue;
    displyUpdate();
  }
}

function displyUpdate() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function setAlarm() {
  const interval = setInterval(() => {
      totalSeconds--;
      displyUpdate();
    if (totalSeconds <= 0) {
      clearInterval(interval);
      userInput.value = "";
      playAlarm();
    }
  }, 1000);
}
main();
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
