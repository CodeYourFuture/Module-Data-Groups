let timer; //to store the setInterval and use it to clearInterval.
let timerPaused; //to check if timer is currently paused
let secondsLeft = 0; //to keep track of how many seconds left in the countdown

//this function is to start the alarm countdown
function setAlarm() {
  //stores user input
  let userInput = document.querySelector("#alarmSet");
  secondsLeft = parseInt(userInput.value); //converts user input to a num

  if (isNaN(secondsLeft) || secondsLeft <= 0) {
    alert("Your input is not valid!");
    return; // this stops execution if input is invalid
  }

  updateTheDisplay(secondsLeft); // this immediately displays the initial time on the screen
  //setinterval() starts a timer that runs every 1000ms(1 second)
  timer = setInterval(() => {
    if (!timerPaused) {
      secondsLeft--; //if timer is not pause, decrease the timer by 1
    }

    updateTheDisplay(secondsLeft);//this changes the timer countdown each second

    if (secondsLeft <= 0) {
      clearInterval(timer); //stops the timer from running
      console.log("The countdown has now reached 0");
      playAlarm();
      backGroundColor("#ADD8E6");
      userInput.value = ""; //this clears the input field
    }
  }, 1000);
}

//function for bg color when alarm goes off
function backGroundColor(color) {
  document.body.style.backgroundColor = color;
}

// function for updating the display
function updateTheDisplay(seconds) {
  const minutesDisplayed = Math.floor(seconds / 60);  //get full minutes
  const secondsDisplayed = seconds % 60; //get full seconds
    // Format minutes and seconds as "mm:ss"
  let minutesAndSeconds = `${String(minutesDisplayed).padStart(2,"0")}:${String(secondsDisplayed).padStart(2, "0")}`;
  const timeLeft = document.querySelector("#timeRemaining");
  timeLeft.innerText = `Time Remaining: ${minutesAndSeconds}`;
}

//function for adding pause and resume
function pauseTheCountDown() {
  document.getElementById("pause").addEventListener("click", () => {
    timerPaused = !timerPaused; // this is to toggle btw the pause state
    const btn = document.getElementById("pause");
    btn.textContent = timerPaused ? "Resume" : "Pause";

    console.log(timerPaused ? "Paused" : "Resumed");
  });
}

pauseTheCountDown();// Run the pause setup function so that the btn can work



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
