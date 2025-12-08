let inputTime = 0;
let timer = null;
let changeBgColor = false;

function setAlarm() {
  inputTime = Number(document.querySelector("#alarmSet").value);

  if (Number.isInteger(inputTime) && !isNaN(inputTime) && inputTime >= 0) {
    if (inputTime === 10) {
      changeBgColor = true;
    } else if (inputTime === 0) {
      displayTime(inputTime);
      playAlarm();
    }
    displayTime(inputTime);
    if (timer) clearInterval(timer);
    timer = setInterval(countDown, 1000);
  }
}

function displayTime(totalTime) {
  const seconds = totalTime % 60;
  const minutes = (totalTime - seconds) / 60;
  const timeLeft = document.querySelector("#timeRemaining");
  timeLeft.innerText = `Time Remaining: ${minutes
    .toString()
    .padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
}

function countDown() {
  inputTime--;
  if (inputTime >= 0) {
    displayTime(inputTime);
  }

  if (inputTime === 0) {
    playAlarm();

    if (changeBgColor) {
      changeColor();
      changeBgColor = false;
    }

    clearInterval(timer);
    timer = null;
  }
}

function changeColor() {
  const bgColor = document.querySelector("div");
  bgColor.classList.add("myBgColor");
}
/*
the the value for time remaining
check its a valid time (greater than 00:00)
decrease value of time remaining by 1 sec for each sec that passes
*/

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

/*
Given the user has entered a number in the input field When the user clicks the “Set Alarm” button Then the “Time Remaining” title should update to show the entered number in mm:ss format
  take value from in input field and store it in a variable inputTime
  check inputTime value is within the accepted range?
  take variable inputTime and display it in time remaining section
  

Given the alarm is set with a valid time When one second passes Then the “Time Remaining” title should decrement by 1 second
  the the value for time remaining
  check its a valid time (greater than 00:00)
  decrease value of time remaining by 1 sec for each sec that passes

Given the alarm is set with a time of 00:00 When the timer reaches 00:00 Then the alarm sound should play continuously
  check time remaining, if it is equal to 00:00 then sound alarm


Given the alarm sound is currently playing When the user clicks the “Stop Alarm” button Then the alarm sound should stop playing
  check if stop alarm button has been pressed
  if true then check if alarm sound is playing then stop alarm sound if true

Given the alarm is set with a time of 00:10 When the timer reaches 00:00 Then the background color should change And the alarm sound should play
  if inputTime is 00:10 and timer reaches 0 the change background color
  play alarm sound

Given the user has not set an alarm When the page first loads Then the “Time Remaining” title should show 00:00 And no alarm sound should play
when page loads time remaining should 0 and no alarm sound should play
*/
