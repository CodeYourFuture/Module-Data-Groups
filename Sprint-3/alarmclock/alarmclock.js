function setAlarm() {
  const inputField = document.getElementById("alarmSet"); // Input field for seconds
  const timeDisplay = document.getElementById("timeRemaining"); // Time display element
  let inputValue = parseInt(inputField.value)//Get time in seconds

  if (isNaN(inputValue) || inputValue <= 0){
    alert ("Please enter a valid number of seconds");
    return;
  }
  // Function to format time as MM:SS
  function getformatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  timeDisplay.textContent = `Time Remaining: ${getformatTime(inputField)}`

  alarmInterval = setInterval (() =>{
    inputField -= 1;

    if (inputField <= 0){
      clearInterval(alarmInterval);
      timeDisplay.textContent = "Time remaining: 00:00";
      playAlarm();
      document.body.style.backgroundColour = "Blue";
    }else {
      timeDisplay.textContent = `Time remaining : ${getformatTime(inputField)}`;
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
