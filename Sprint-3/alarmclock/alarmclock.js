function setAlarm() {

  // Get the user input value
  var timeUser = document.getElementById("alarmSet").value;

  // Update the timeRemaining display
  var timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerHTML = `Time Remaining: ${timeUser}`;

  var 
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
