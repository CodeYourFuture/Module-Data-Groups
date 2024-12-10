function setAlarm() {
  const userInput = document.getElementById("alarmSet");
  let inputValue = parseInt(userInput.value);  
  // console.log(typeof inputValue)

  const timeRemainingField = document.getElementById("timeRemaining");
  // console.log(timeRemainingField);

  function getFormattedTime(seconds){
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
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
