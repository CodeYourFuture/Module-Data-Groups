// collecting values from the user
const headingElement = document.querySelector("#timeRemaining")
const stopBtn = document.querySelector("#stop")
const setBtn = document.querySelector("#set")

let alarmTimer = null
let countdownInterval = null

function setAlarm() {
  let seconds = parseInt(document.querySelector("#alarmSet").value) 


  if (isNaN(seconds)) {
    alert('Please set a valid time')
    return
  }

  seconds = Math.floor(Number(seconds))
  let timeoutMillis = seconds * 1000 // min to millisecond

  updateCountdown(seconds) // Start countdown

  setBtn.disabled = true

  alarmTimer = setTimeout(() => {
    playAlarm()
    changeBgColor()
    setBtn.disabled = false
  }, timeoutMillis)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateDisplay(seconds) {
  document.querySelector("#timeRemaining").innerText = convertSecToDisplayUnit(seconds)
}

function convertSecToDisplayUnit(seconds) {
  let minutes = (Math.floor(seconds/60)).toString().padStart(2,"0")
  let second = (seconds%60).toString().padStart(2, "0")
  return `Time Remaining: ${minutes}:${second}`
}
// Update countdown timer/////////////////////////////////////////////////////////////////////////////////
function updateCountdown(seconds) {
  updateDisplay(seconds)

  countdownInterval = setInterval(() => {
    seconds-- // Decrease seconds
    updateDisplay(seconds) // Update display

    // Stop the countdown when the time reaches zero
    if (seconds <= 0) {
      clearInterval(countdownInterval); // Stop the interval
      document.getElementById("timeRemaining").textContent = "Time's up!"
    }
  }, 1000)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function changeBgColor() {
  let timeRemainingText = document.getElementById("timeRemaining")
  timeRemainingText.style.backgroundColor = "#FF0000" // Change background color
  const body = document.querySelector("body");
  body.style.color = "white"
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function stopTimer() {
  clearTimeout(alarmTimer); // Stop the alarm timer
  clearInterval(countdownInterval); // Stop the countdown interval
  document.getElementById("timeRemaining").textContent = "Time Remaining:";
  document.getElementById("timeRemaining").style.backgroundColor = "white";
  document.body.style.color = "black" // change the text color to black
  setBtn.disabled = false; // Re-enable the set button
  document.querySelector("#alarmSet").value = "" // Reset the input space
}

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopTimer();
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
