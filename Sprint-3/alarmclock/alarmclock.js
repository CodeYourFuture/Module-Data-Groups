//global variables: 1- userInput, 2- timeRemaining, 3- stop, 4- seconds, 5- minutes

// get access to the "input" element
const userInput = document.querySelector("#alarmSet");
// get access to the "timeRemaining" element
const timeRemaining = document.querySelector("#timeRemaining");
// get access to the "stop" button
const stop = document.querySelector("#stop");
let seconds = 0;
let minutes = 0;

function main() {
  // add an event listener to the "input" element that will call the counterUpdate function when clicked on or when the user types in the input field.
  document.getElementById("alarmSet").addEventListener("click", counterUpdate);
  document.getElementById("alarmSet").addEventListener("keyup", counterUpdate);
}

// define the function that will update the counter
function counterUpdate() {
  // local variables: useInputValue
  // get the value of the input element.
  const userInputValue = userInput.value;
  // check if the input is equal to or greater than 0
  if (userInputValue >= 0) {
    minutes = Math.floor(userInputValue / 60);
    seconds = userInputValue % 60;
    // if it is, update the TimeRemaining element to show the real time remaining in minutes and seconds.
    timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
}

// define the function that will count down the time remaining every second and update the remaining time on the page
function setAlarm() {
  // use setInterval to call a function every second that will decrease the time remaining by 1 second.
  const interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
      timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      clearInterval(interval);
      userInput.value = "";
      playAlarm();
    }
  }, 1000);
}
main();
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
