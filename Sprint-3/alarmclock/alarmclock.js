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
  let totalSeconds = Math.floor(timeRemainingInMs / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  timeRemaining.textContent = `Time Remaining: ${formatTime(minutes)}:${formatTime(seconds)}`
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
