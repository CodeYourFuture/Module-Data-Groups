let countdown
let timeLeft

function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  timeLeft = parseInt(alarmInput.value);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid number which must be greater than 0");
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
