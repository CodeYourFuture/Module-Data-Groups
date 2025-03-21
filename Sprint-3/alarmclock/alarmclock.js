function getFormattedInput(inputInSeconds) {
  const minutes = Math.floor(inputInSeconds / 60);
  const seconds = inputInSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}
function countdown(inputInSeconds) {
  function updateAndContinue() {
    if (inputInSeconds < 0) {
      playAlarm();
      document.body.style.backgroundColor = "red";
      return;//break the loop when inputInSeconds reaches 0
    }
    timeRemaining.innerHTML = `Time Remaining: ${getFormattedInput(inputInSeconds)}`;
    inputInSeconds--;
    setTimeout(updateAndContinue, 1000);
  }
  updateAndContinue();
} function setAlarm() {
  let inputInSeconds = alarmSet.value;
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.innerHTML = `Time Remaining: ${getFormattedInput(inputInSeconds)}`;
  countdown(inputInSeconds);
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
  document.body.style.backgroundColor = "white";
}

window.onload = setup;
