let timer; // Fix 3: Declared globally so we can track and clear active intervals

function formatTime(s) { // Fix 2: Moved outside setAlarm so it's not rebuilt on every click
  const mins = String(Math.floor(s / 60)).padStart(2, "0");
  const secs = String(s % 60).padStart(2, "0");
  return `Time Remaining: ${mins}:${secs}`;
}

function setAlarm() {
  clearInterval(timer); // Fix 3: Clear any running timer immediately when a new one is set

  let seconds = parseInt(document.getElementById("alarmSet").value, 10);
  
  // Fix 1: Stop execution if input is empty ("") resulting in NaN or is <= 0
  if (isNaN(seconds) || seconds <= 0) { 
    return;
  }

  const heading = document.getElementById("timeRemaining");
  heading.innerText = formatTime(seconds);

  timer = setInterval(() => {
    seconds--;
    heading.innerText = formatTime(seconds);
    if (seconds <= 0) {
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
