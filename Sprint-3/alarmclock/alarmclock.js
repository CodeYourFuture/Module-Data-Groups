function setAlarm() {
  //get time input from user, as a number
  let input = document.getElementById("alarmSet").value;
  //find element to display timer
  let timeRemaining = document.getElementById("timeRemaining");
  //find part of timer that not changes
  let timerText = timeRemaining.innerText;
  let stringTimerText = timerText.substring(0, timerText.length - 5);
  //format time from input and change timer text
  timeRemaining.innerText = stringTimerText + formatTime(input);

  let i = input;
const interval = setInterval(() => { //set interval repeats code each second until reach 0.
  timeRemaining.innerText = stringTimerText + formatTime(i);
  i--;
  if (i < 0) {
    clearInterval(interval);
  }
  if (i == 0){
    playAlarm();
  }
}, 1000);

}
function formatTime(seconds){
  let minutes = parseInt(seconds / 60);
  let remaindSecond = seconds % 60;
  let strMinutes = String(minutes).padStart(2, "0");
  let strRemaindSecond = String(remaindSecond).padStart(2, "0");
  let result = strMinutes + ":"+ strRemaindSecond;
  return result;
}



/*
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
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
