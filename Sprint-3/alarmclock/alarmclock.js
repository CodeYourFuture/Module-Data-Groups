let timeRemaining;
let timer;

document.getElementById("set").addEventListener("click", () => {
  setAlarm();
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  document.getElementById("set").innerText = "Set Alarm";
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
  document.getElementById("alarmSet").value = "";
  audio.pause();
  audio.currentTime = 0;
});

function setAlarm() {
  timeRemaining = parseInt(document.getElementById("alarmSet").value, 10);
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid positive number");
    return;
  }
  clearInterval(timer); 
  startTimer(); 
}

function startTimer() {
  timer = setInterval(() => {
    if (timeRemaining === 0) {
      clearInterval(timer); 
      playAlarm(); 
    } else {
      timeRemaining--;
    }
    let minutes = Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (timeRemaining % 60).toString().padStart(2, "0");
    document.getElementById(
      "timeRemaining"
    ).innerText = `Time Remaining: ${minutes}:${seconds}`;
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
