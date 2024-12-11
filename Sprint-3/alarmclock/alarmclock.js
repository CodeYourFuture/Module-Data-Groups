function setAlarm() {
  // this will get the input value and convert it to a number
  const inputField = document.getElementById("alarmSet");// document.getElementById("alarmSet") it takes the input box where the user types the number of seconds
  let timeRemaining = parseInt(inputField.value,10);// .value get the text inside the input box, parseInt(inputField.value, 10), converts the input which is a string into a number so that we can do arithmetics with it.

  // find the heading where the time will be displayed
  const timeDisplay = document.getElementById("timeRemaining");

  // this function will help to format time as MM:SS
  function formatTIme(seconds){
    const minutes = Math.floor(seconds /60);
    const secs =seconds % 60;
    return `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(secs).padStart(2,0)}`;
    
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
