function setAlarm() {
  // this will get the input value and convert it to a number
  const inputField = document.getElementById("alarmSet");// document.getElementById("alarmSet") it takes the input box where the user types the number of seconds
  let timeRemaining = parseInt(inputField.value,10);// .value get the text inside the input box, parseInt(inputField.value, 10), converts the input which is a string into a number so that we can do arithmetics with it.

  // find the heading where the time will be displayed
  const timeDisplay = document.getElementById("timeRemaining");

  // this function will help to format time as MM:SS
  function formatTIme(seconds){
    const minutes = Math.floor(seconds /60);// calculates the number of minutes in the totality of seconds
    const secs =seconds % 60; // calculates the remaining seconds after converting to minutes
    return `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(secs).padStart(2,0)}`; // String(value).padStart(2, "0") formats numbers so that they always have 2 digits, like  1 -> 01

    // sets initial display
    timeDisplay.innerText = formatTIme(timeRemaining);

    

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
