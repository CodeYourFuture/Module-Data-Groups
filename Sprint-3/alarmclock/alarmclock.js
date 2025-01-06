let timeRemaining = document.querySelector("#timeRemaining");
let alarmSet = document.querySelector("#alarmSet");
let countDown; // to store interval id for countdown 

function setAlarm() {
    let minutes = parseInt(alarmSet.value) // to ensure the value is a number

    if(isNaN(minutes) || minutes < 1){
      alert("Please enter a valid number for minutes");
      return;
    }
    let timeInMs = minutes * 1000; // converting minutes to milliseconds 
  startCountDown(timeInMs);
}

function startCountDown(timeRemainingInMs){
  updateTimeRemaining(timeRemainingInMs);
  
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
