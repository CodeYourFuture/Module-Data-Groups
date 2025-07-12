let countdownInterval;
function setAlarm() {
  const input = document.getElementById("alarmSet");
  let seconds = Number(input.value);
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return; 
}
updateDisplay(seconds);
countdownInterval = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0);
      playAlarm();
    } else {
      updateDisplay(seconds);
    }
  }, 1000);
}
function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, "0");
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${minutes}:${secs}`;
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
