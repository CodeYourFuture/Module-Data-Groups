//Given the user has entered a number in the input field
//When the user clicks the "Set Alarm" button
//Then the "Time Remaining" title should update to show the entered number in mm:ss format

//Given the alarm is set with a valid time
//When one second passes
//Then the "Time Remaining" title should decrement by 1 second

//Given the alarm is set with a time of 00:00
//When the timer reaches 00:00
//Then the alarm sound should play continuously

//Given the alarm sound is currently playing
//When the user clicks the "Stop Alarm" button
//Then the alarm sound should stop playing

//Given the alarm is set with a time of 00:10
//When the timer reaches 00:00
//Then the background colour should change
//And the alarm sound should play

//Given the user has not set an alarm
//When the page first loads
//Then the "Time Remaining" title should show 00:00
// And no alarm sound should play

// 1. create variable that holds time entered by user
// 2. create a variable we are counting to
// 3. convert time to minutes and seconds and store it
// in variable
// 4. display the time in the "Time Remaining" title.
// when "Set alarm" button is clicked.
// 5. decrement the time by 1 second every second
// 6. trigger the alarm sound when the time reaches 00:00
let remainingSeconds = 0;
let minutes = 0;
let seconds = 0;
let paddedMinutes = 0;
let paddedSeconds = 0;
let timer;
const alarmDisplay = document.getElementById("timeRemaining");

function setAlarm() {
  clearInterval(timer);
  remainingSeconds = Number(document.getElementById("alarmSet").value);

  // Read the input
  minutes = Math.floor(remainingSeconds / 60);
  paddedMinutes = minutes.toString().padStart(2, "0");
  seconds = remainingSeconds % 60;
  paddedSeconds = seconds.toString().padStart(2, "0");
  // Store remainingSeconds
  // Display the first time

  alarmDisplay.textContent = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`; //return console.log(String(alarmDisplay));

  // Start the timer
  timer = setInterval(updateDisplay, 1000);
}

function updateDisplay() {
  if (remainingSeconds === 0) {
    clearInterval(timer);
    return playAlarm();
  }
  remainingSeconds = remainingSeconds - 1;
  minutes = Math.floor(remainingSeconds / 60);
  paddedMinutes = minutes.toString().padStart(2, "0");
  seconds = remainingSeconds % 60;
  paddedSeconds = seconds.toString().padStart(2, "0");
  alarmDisplay.textContent = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`; //return console.log(String(alarmDisplay));
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
