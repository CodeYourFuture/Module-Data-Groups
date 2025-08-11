const typedInput = document.getElementById("alarmSet"); // Assuming the input field is named "alarmSet"
const timeRemaining = document.getElementById("timeRemaining"); // Assuming the span element is named "timeRemaining"
const button = document.getElementById("set"); // Assuming the button element is named "set"
const stopButton = document.getElementById("stop"); /// Assuming the button element is named "stop"

let alarmTime; // declaring a Variable to store the alarm time

function setAlarm() {
  const alarmTimeInput = parseInt(typedInput.value); // Getting the value from the input field and converting it to an integer
  if (isNaN(alarmTimeInput) || alarmTimeInput <= 0) {
    // Checking if the value is not a number or less than 0
    alert("Please enter a valid number"); // Displaying an alert message if the value is not a number or less than 0
    return; // Returning nothing if the value is not a number or less than 0
  }

  typedInput.value = ""; // Clearing the input field after setting the alarm

  let remainingTime = alarmTimeInput; // assigning the value of alarmTimeInput to remainingTime.
  timeRemaining.textContent = `Time Remaining: ${formatTime(remainingTime)}`; // this would display the remaining time on the screen using a time formatting function.
  alarmTime = setInterval(() => {
    // setInterval method is used to repeatedly call a function that will delay the alarm until the remaining time gets to 0.

    remainingTime--; // decrementing the remaining time by 1.

    timeRemaining.textContent = `Time Remaining: ${formatTime(remainingTime)}`; // this would display the remaining time on the screen using a time formatting function.

    if (remainingTime === 0) {
      clearInterval(alarmTime); // stopping the alarm time when it gets to 0
      playAlarm(); // call the function to play the alarm sound immediately the alarm time gets to 0.
      document.body.style.backgroundColor = "red"; // changing the background color to red when the alarm time gets to 0.
    }
  }, 1000); // this would make the alarm time countdown by 1 second. we could also use setTimeout method.
}

function stopAlarm() {
  // this function is called when the stop button is clicked

  clearInterval(alarmTime); // we using clearInterval to stop the alarm time from counting.
  pauseAlarm(); // we call the function to pause the alarm sound.
}
function formatTime(seconds) {
  // this function formats the time into minutes and seconds
  let minutes = Math.floor(seconds / 60); // we get the minutes by dividing the seconds by 60 and rounding it down using Math.floor.
  let sec = seconds % 60; // we get the sec by getting the remainder of the seconds divided by 60.
  return `${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);

  document.getElementById("stop").addEventListener("click", stopAlarm);
}

function playAlarm() {
  audio.play();
  let backgroundColorChange = true; //we used a boolean variable to toggle the background color by changing it to true or false.
  let flashAlarm = setInterval(() => {
    // setInterval method is used to repeatedly call a function that will flash the background color until the alarm stops.
    document.body.style.backgroundColor = backgroundColorChange
      ? "#7c0404"
      : "#b5a1c4";
    ////we used a boolean variable to toggle the background color by changing it to true or false using the ternary operator.

    backgroundColorChange = !backgroundColorChange; // if backgroundColorChange is true, it will be changed to false and vice versa.
  }, 500);
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
