let timer;

function updateDisplay(time) {
  
  let heading = document.getElementById("timeRemaining");
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  heading.innerText =
    "Time Remaining: " +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");
}

function setAlarm() {
  
  if (timer) clearInterval(timer);
  audio.pause();
  audio.currentTime = 0;

  let time = Number(document.getElementById("alarmSet").value);
  if (isNaN(time) || !Number.isInteger(time) || time <= 0) return;
  
  updateDisplay(time);

  timer = setInterval(function () {
    time = time - 1;
    
    updateDisplay(time);

    if (time <= 0) {
      playAlarm();
      clearInterval(timer);
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
