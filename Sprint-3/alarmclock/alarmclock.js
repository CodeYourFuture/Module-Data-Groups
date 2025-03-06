const timeRemaining = document.querySelector(`#timeRemaining`);
const alarmSet = document.querySelector(`#alarmSet`);

function setAlarm() {
  let inputValueToNumber = parseInt(alarmSet.value);
  if (isNaN(inputValueToNumber) || inputValueToNumber <= 0) {
    return alert(`Please enter correct number!`);
  }
  function displayChanges() {
    let minutes = String(Math.floor(inputValueToNumber / 60)).padStart(2, `0`);
    let seconds = String(inputValueToNumber % 60).padStart(2, `0`);
    timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
  }
  displayChanges();

  let interval = setInterval(() => {
    inputValueToNumber--;
    if (inputValueToNumber <= 0) {
      clearInterval(interval);
      playAlarm();
    }
    displayChanges();
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
