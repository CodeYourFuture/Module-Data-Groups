function setAlarm() {
  const input = document.querySelector("#alarmSet");
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.innerText = `Time Remaining ${input.value}:00`;
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
