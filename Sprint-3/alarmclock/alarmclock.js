function setAlarm() {
  // get the users input in seconds from the input element
   const inputField = document.getElementById("alarmSet");

   // get the "timeRemaining" element where we show the time
   const timeDisplay = document.getElementById("timeRemaining");

   // convert the users input to a number
   let secondsRemaining = Number(inputField.value);
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
