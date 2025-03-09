let remainingTimeElement = document.getElementById("timeRemaining");
let setAlarmBtn = document.getElementById("set");
let alarmSetInput = document.getElementById("alarmSet");

let timer = null;
let totalSeconds = 0;
let alarmRunning = false;

const updateDisplay = () => {
  //check if total seconds is below 0, if yes it stops the countdown and displays time's up and plays sound.
  if (totalSeconds < 0) {
    clearInterval(timer);
    // remainingTimeElement.innerHTML = "Time's up!";
    playAlarm();
    //this resets alarm running and timer and exit the function
    alarmRunning = false;
    timer = null;
    return;
  }
  //declaring variables, converting total seconds to display minutes and making sure that the minutes and seconds are displayed as 2 digits by using the pad function.
  let displayMinutes = Math.floor(totalSeconds / 60);
  let displaySeconds = totalSeconds % 60;
  displayMinutes = String(displayMinutes).padStart(2, "0");
  displaySeconds = String(displaySeconds).padStart(2, "0");
  remainingTimeElement.innerHTML = `Time Remaining: ${displayMinutes}:${displaySeconds}`;
  totalSeconds--;
};

const setAlarm = () => {
  //set the seconds to the input value
  let seconds = alarmSetInput.value;
  //This checks to see if there is an alarm already running, if not, set the total seconds to input value.
  if (!alarmRunning && seconds > 0) {
    totalSeconds = seconds;
    //this prevents setting another alarm whilst there is an alarm running
    alarmRunning = true;
    //calling the updateDisplay function which shows the initial time and set the time to update every second.
    updateDisplay();
    timer = setInterval(updateDisplay, 1000);
  }
};

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
