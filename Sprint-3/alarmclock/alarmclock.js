function setAlarm() {
  //store user input
  let inputValue = document.querySelector("#alarmSet");
  let inputValueToNumber = parseInt(inputValue.value);
  console.log(typeof inputValueToNumber);
//convert user input to mm:ss time format
  const minutes = Math.floor(inputValueToNumber / 60);
  const seconds = inputValueToNumber % 60;
  const minutesAndSeconds = `${String(minutes).padStart(2, "0")}:${String( seconds).padStart(2, "0")}`;
  console.log(minutesAndSeconds);


  //accessing Time remaining H1
  const timeLeft = document.querySelector("#timeRemaining");
  timeLeft.innerText = `Time Remaining: ${minutesAndSeconds}`;
  console.log(`you have ${minutesAndSeconds} minutes remaining`);
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

/*Given the user has entered a number in the input field
When the user clicks the "Set Alarm" button
Then the "Time Remaining" title should update to show the entered number in mm:ss format

Given the alarm is set with a valid time
When one second passes
Then the "Time Remaining" title should decrement by 1 second

Given the alarm is set with a time of 00:00
When the timer reaches 00:00
Then the alarm sound should play continuously

Given the alarm sound is currently playing
When the user clicks the "Stop Alarm" button
Then the alarm sound should stop playing

Given the alarm is set with a time of 00:10
When the timer reaches 00:00
Then the background color should change
And the alarm sound should play

Given the user has not set an alarm
When the page first loads
Then the "Time Remaining" title should show 00:00
And no alarm sound should play*/
