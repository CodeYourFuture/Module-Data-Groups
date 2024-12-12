let alarmInterval;

function setAlarm() {
  const inputField = document.getElementById("alarmSet"); // Input field for seconds
  
  let inputValue = parseInt(inputField.value)//Get time in seconds

  const timeDisplay = document.getElementById("timeRemaining"); // Time display element
  
  if (isNaN(inputValue) || inputValue <= 0){
    alert ("Please enter a valid number of seconds");
    return;
  }
  // Function to format time as MM:SS
  function getFormattedTime(time) {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const secs = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  timeDisplay.textContent = `Time Remaining: ${getFormattedTime(inputValue)}`

  alarmInterval = setInterval (() => {
    inputValue -= 1;

    if (inputValue <= 0) {
      clearInterval(alarmInterval);
      timeDisplay.textContent = "Time remaining: 00:00";
      playAlarm();
      document.body.style.backgroundColor = "Pink";
    }else {
      timeDisplay.textContent = `Time remaining : ${getFormattedTime(inputValue)}`;
    }
    },1000);
  }
  function pauseAlarm (){
    audio.pause();
    clearInterval(countdownInterval);
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
