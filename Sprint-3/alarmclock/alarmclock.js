// Global Variables
// timeLeft:  stores how many seconds remain in the countdown.
// timerId: stores the ID returned by setInterval() so that we can stop the timer later.
// We need to store these values outside the function, in order to: 1. update the time every second
// Stop the timer when it hits 00:00
// Stop the timer when the user clicks "Stop Alarm"
let timeLeft = 0;
let timerId = null;

//This function runs when the user clicks "Set Alarm"
function setAlarm() {
  //Gets the value from the <input id="alarmSet">
  //The value is a string like "90" or "10"
  const input = document.getElementById("alarmSet").value;
  //We use this to convert "90" --> 90 bcz we can’t subtract from a string, we need a real number to count down.
  // Store it the Global Variable "timeLeft"
  timeLeft = Number(input);
  // this shows the initial time, and it must happen before the countdown starts.
  //It shows immediately the formatted time(mm:ss) on the page.
  updateTimeDisplay(timeLeft);

  if (timerId) {
    clearInterval(timerId);
  }
  //Starts the Countdown, this is the purpose of using "setInterval"
  timerId = setInterval(() => {
    //Each tick subtract 1 second from the remaining time.
    timeLeft--;
    // Update the time display every second.
    updateTimeDisplay(timeLeft);

    //When the time reaches 00:00 "Zero"
    //stop the countdown
    //Alarm sound plays continuously
    //Change the background color

    if (timeLeft <= 0) {
      clearInterval(timerId);
      playAlarm();
      document.body.style.backgroundColor = "red";
    }
  }, 1000);
}
//This function will convert raw seconds mm:ss.
function updateTimeDisplay(seconds) {
  //Calculate the minutes by dividing seconds by 60.
  //Use Math.floor to get rid of decimal number and keep whole minutes.
  //Convert to a string and add a leading zero if needed.
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  //Calculate the seconds.
  //Use % which gives the remainder.
  //convert to string and pad with zero.
  const ss = String(seconds % 60).padStart(2, "0");
  //Update the DOM "Make the countdown" visible.
  document.getElementById("timeRemaining").innerText = `${mm}:${ss}`;
}
//This function runs when the user clicks Stop Alarm
function pauseAlarm() {
  audio.pause();
  //Resets the audio.
  audio.currentTime = 0;
  //Resets the background color.
  document.body.style.backgroundColor = "";
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
