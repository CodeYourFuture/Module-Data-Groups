//global variables: 1- userInput, 2- timeRemaining, 3- stop, 4- seconds, 5- minutes

// get access to the "input" element
const userInput = document.querySelector("#alarmSet");
// get access to the "timeRemaining" element
const timeRemaining = document.querySelector("#timeRemaining");
// get access to the "stop" button
const stop = document.querySelector("#stop");
let totalSeconds = 0;

function main() {
  // add an event listener to the "input" element that will call the counterUpdate function when clicked on
  document.getElementById("alarmSet").addEventListener("click", counterUpdate);
}

// define the function that will update the counter
function counterUpdate() {
  // local variables: useInputValue
  // get the value of the input element.
  const userInputValue = userInput.value;
  // check if the input is equal to or greater than 0
  if (userInputValue >= 0) {
    totalSeconds = userInputValue;
    displyUpdate();
  }
}

// Update the TimeRemaining element to show the real time remaining in minutes and seconds.
function displyUpdate() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// define the function that will count down the time remaining every second and update the remaining time on the page
function setAlarm() {
  // use setInterval to call a function every second that will decrease the time remaining by 1 second.
  const interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      displyUpdate();
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
