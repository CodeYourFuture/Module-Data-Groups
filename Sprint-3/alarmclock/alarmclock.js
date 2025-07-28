// disable/enable buttons
function setButtonSates(states){
  for ( const [id, disabled] of Object.entries(states)){
   document.getElementByid(id).disabled = disabled:
  }
}

function buttonInitial (){ // Buttons state  
   setButtonStates({
    stop: true,
    pause: true,
    reset: true,
    resume: true,
    set: false
   });
}
function buttonsAlarmRunning() {
  setButtonStates({
    stop: true,
    pause: false,
    reset: true,
    resume: true,
    set: true
  });
}

function buttonsAlarmPlayed() {
  setButtonStates({
    stop: false,
    pause: true,
    reset: true,
    resume: true,
    set: true
  });
}

function buttonsAlarmPaused() {
  setButtonStates({
    stop: true,
    pause: true,
    reset: false,
    resume: false,
    set: true
  });
}

function buttonsAlarmResume() {
  setButtonStates({
    stop: true,
    pause: false,
    reset: true,
    resume: true,
    set: true
  });
}
  
// global variable, to save the interval an use it in pause/resume
let runInterval = null;
  
function setAlarm() {
  // Set the alarm time in inter variables
  let inputAlarmSet = document.querySelector("#alarmSet");
  let timeRemain = parseInt(inputAlarmSet.value);

  // if the time is not valid or cero, don't do anything.
  if (isNaN(timeRemain) || timeRemain <= 0) {
    return;
  }

  inputAlarmSet.value = '';

  // call the function to convert the time in 00:00 format
  let timeRemainFormatted = formatTime(timeRemain);
  let labelRemainLabel = document.querySelector("#timeRemaining");
  labelRemainLabel.innerText = "Time Remaining: " + timeRemainFormatted;

  // run the interval to call labelUpdate function and subtracts every second
  runInterval = setInterval(labelUpdate, 1000);
  buttonsAlarmRunning();

  // nested function: this function update the time at the label, decrease the time every second and check 0 to activate the alarm
  function labelUpdate() {
    timeRemain = timeRemain - 1;
    timeRemainFormatted = formatTime(timeRemain);
    labelRemainLabel.innerText = "Time Remaining: " + timeRemainFormatted;

    // check if 0 to activate the alarm.
    if (timeRemain <= 0) {
      playAlarm();
      labelRemainLabel.innerText = "Time Remaining: 00:00";
      clearInterval(runInterval);
      buttonsAlarmPlayed();
    }
  }

  // pause function
  document.getElementById("pause").addEventListener("click", function () {
    pause();
  });
  function pause() {
    clearInterval(runInterval);
    buttonsAlarmPaused();
  }

  // resume function
  document.getElementById("resume").addEventListener("click", function () {
    resume();
  });
  function resume() {
    runInterval = setInterval(labelUpdate, 1000); 
    buttonsAlarmResume();
  }

  // reset function
  document.getElementById("reset").addEventListener("click", reset());
  function reset() {
    clearInterval(runInterval);
    timeRemain = 0;
    labelRemainLabel.innerText = "Time Remaining: 00:00";
    inputAlarmSet.value = '';
    buttonsInitial();
  }
}
// format of the time from seconds to 00:00
function formatTime(timeSecs) {
  let minutes = Math.floor(timeSecs / 60);
  let seconds = timeSecs % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
  document.body.style.backgroundColor = "red";
}

function pauseAlarm() {
  audio.pause();
    document.body.style.backgroundColor = "";
    buttonsInitial();
}

window.onload = setup;
