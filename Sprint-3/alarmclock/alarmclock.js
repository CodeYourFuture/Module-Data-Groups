let timeRemaining = document.querySelector("#timeRemaining");
let alarmSet = document.querySelector("#alarmSet");
let countDown; // to store interval id for countdown 

function setAlarm() {
  let minutes = parseInt(alarmSet.value);// to ensure the value is a number

  if(isNaN(minutes) || minutes < 1){
    alert("Please enter a valid number for minutes");
    return;
  }
  let timeInMs = minutes * 60 * 1000; // convert minutes to milliseconds 
  startCountDown(timeInMs); 
}

// function to start countdown 
function startCountDown(timeRemainingInMs) {
  updateTimeRemaining(timeRemainingInMs);// reset time remaining display

  countDown = setInterval(() => {
    timeRemainingInMs -= 1000;

    updateTimeRemaining(timeRemainingInMs);

    // when time is up, trigger the alarm

    if (timeRemainingInMs <= 0) {
      clearInterval(countDown);
      playAlarm();
      timeRemaining.textContent = "Time's up!"
    }
  }, 1000);
}

//function to update the displayed time remaining 
function updateTimeRemaining(timeRemainingInMs) {
  let minutes = Math.floor(timeRemainingInMs / 60000);
  let seconds = Math.floor(timeRemainingInMs % 60000 / 1000);
  timeRemaining.textContent = `Time remaining ${formatTime(minutes)}: ${formatTime(seconds)}`
}

function formatTime(time) {
  return time < 0 ? `0${time}` : time
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
