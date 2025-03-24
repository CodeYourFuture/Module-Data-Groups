

let timerId;
let timeLeft;

function setAlarm() {
  let input = document.getElementById("alarmSet").value;
  let timeRemaining = parseInt(input);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a positive number");
    return;
  }

  clearInterval(timerId); // Stop any running timer
  timeLeft = timeRemaining;
  updateTimeDisplay(timeLeft); // Show correct initial value

  timerId = setInterval(() => {
    if (timeLeft > 1) {
      timeLeft--;
      updateTimeDisplay(timeLeft);
    } else {
      clearInterval(timerId);
      updateTimeDisplay(0); // ensure 00:00 is displayed
      playAlarm();
    }
  }, 1000);
}


function updateTimeDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
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


