// collecting values from the user
const headingElement = document.querySelector("#timeRemaining")
const stopBtn = document.querySelector("#stop")
const setBtn = document.querySelector("#set")

let alarmTimer = null
let countdownInterval = null

function setAlarm() {
  let min = document.querySelector("#alarmSet").value

  if (min.trim() === "" || min <= 0) {
    alert('Please set a valid time')
    return;
  }

  min = Math.floor(parseInt(min))
  let difference = min * 60 * 1000 // min to millisecond
  let sec = min * 60 // Total seconds


  updateCountdown(sec) // Start countdown

  setBtn.disabled = true

  alarmTimer = setTimeout(() => {
    playAlarm()
    changeBgColor()
    setBtn.disabled = false
  }, difference)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateDisplay(seconds) {
  let min = Math.floor(seconds / 60)
  let remainingSeconds = seconds % 60
  document.querySelector("#timeRemaining").innerText = `${min}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`
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
  document.getElementById("timeRemaining").textContent = "Time Remaining";
  document.getElementById("timeRemaining").style.backgroundColor = "none";
  setBtn.disabled = false; // Re-enable the set button
  document.querySelector("#alarmSet").value = ""
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
