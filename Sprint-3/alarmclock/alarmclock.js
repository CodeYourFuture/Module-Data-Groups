/**
 * This script implements a simple countdown alarm clock.
 * - When the user enters a number of seconds and clicks "Set Alarm",
 *   the countdown begins and displays the remaining time in mm:ss format.
 * - When the countdown reaches 00:00, an alarm sound is played.
 * - The user can stop the alarm sound by clicking the "Stop Alarm" button.
 */

const inputArea = document.querySelector("#alarmSet"); // Access the input area in the DOM.
const timeRemainingInfo = document.querySelector("#timeRemaining"); // Access the heading object in the DOM.

/**
 * Retrieves the user input and, if valid, starts the countdown.
 * Also updates the display immediately before the countdown begins.
 */
function setAlarm() {
  const timeInterval = Number(inputArea.value); // Get the the entered value and converted to number.
  if (timeInterval > 0) {
    updateTimeDisplay(timeInterval);
    startCountdown() // call function to start counting down
  } else {
    alert("Please enter a time greater than 0 seconds.")
  }
}

/** 
 * Handles the countdown logic, updating the display every second.
 * Plays the alarm sound when time reaches zero.
 */
function startCountdown() {
  let timeRemaining = Number(inputArea.value); // Get the value of
  const timer = setInterval(function () {
    timeRemaining--;
    updateTimeDisplay(timeRemaining);
    if (timeRemaining === 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

/**
 * Converts the total time in seconds to mm:ss format and updates the DOM.
 * @param {number} timeInSeconds - Total time to display, in seconds.
 */
function updateTimeDisplay(timeInSeconds) {
  const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
  timeRemainingInfo.innerText = `Time Remaining: ${minutes}:${seconds}`;
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
