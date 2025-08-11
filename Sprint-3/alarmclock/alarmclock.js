function myLog(...message) {
  const debug = true;
  if (debug) {
    console.log(...message);
  }
}

let initialInputSeconds = 0;
let intervalId;

function countdown() {
  initialInputSeconds--;
  upadteTimeRemaining(initialInputSeconds);
  if (initialInputSeconds <= 0) {
    clearInterval(intervalId);
    playAlarm();
    return;
  }
  
}

function upadteTimeRemaining(inputSeconds) {
  myLog("timer in second:", inputSeconds);
  const minutes = Math.floor(inputSeconds / 60);
  myLog("minutes:", minutes);
  const seconds = inputSeconds % 60;
  myLog("seconds:", seconds);
  const paddedMinutes = String(minutes).padStart(2, "0");
  myLog("paddedMinutes:", paddedMinutes);
  const paddedSeconds = String(seconds).padStart(2, "0");
  myLog("paddedSeconds:", paddedSeconds);
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${paddedMinutes}:${paddedSeconds}`;
}

function setAlarm() {
  document.getElementById("set").disabled = true;
  initialInputSeconds = document.getElementById("alarmSet").value;
  upadteTimeRemaining(initialInputSeconds);

  if (initialInputSeconds <= 0) {
    alert("Your input is invalid");
  } else {
    //set the countdown timer with `setInterval` to update the remainig time every second
    intervalId = setInterval(countdown, 1000);
  }
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
  clearInterval(intervalId);
  initialInputSeconds = 0;
  upadteTimeRemaining(initialInputSeconds);
  document.getElementById("alarmSet").value = "";
  document.getElementById("set").disabled = false;
}

window.onload = setup;
