// When you click the `Set Alarm` button the counter at the top of the screen should change
// to the number you entered in the `input` field.
// For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound.
// You can make the sound happen by using `playAlarm()`.
// You can stop the alarm sound by pressing the `Stop Alarm` button.

const inputArea = document.querySelector("#alarmSet"); // Access the input area in the DOM.

function setAlarm() {
  const timeInterval = Number(inputArea.value); // Get the the entered value and converted to number.
  // If the entered value is negative show message in DEV tool console and the timer not working.
  if (timeInterval <= 0) {
    console.error("Please enter a positive number of seconds.");
    return;
  }
  const seconds = (timeInterval % 60).toString().padStart(2, "0"); // Get the seconds from the timeInterval and converted to string and make sure the padding is 2 digits
  const minutes = Math.floor(timeInterval / 60)
    .toString()
    .padStart(2, "0"); // Get the minutes from the timeInterval and converted to string and make sure the padding is 2 digits
  const timeRemainingInfo = document.querySelector("#timeRemaining"); // Access the heading object in the DOM.
  timeRemainingInfo.innerText = `Time Remaining: ${minutes} : ${seconds}`; // Update the heading.
  startCountdown(); // call countdown function
}

function startCountdown() {
  let timeRemaining = Number(inputArea.value); // Get the value of
  const timer = setInterval(function () {
    timeRemaining--;
    // 1. Convert to minutes and seconds
    const seconds = (timeRemaining % 60).toString().padStart(2, "0");
    const minutes = Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    // 2. Update the DOM
    const timeRemainingInfo = document.querySelector("#timeRemaining");
    timeRemainingInfo.innerText = `Time Remaining: ${minutes} : ${seconds}`;
    if (timeRemaining === 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
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
