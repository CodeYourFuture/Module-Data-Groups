function setAlarm() {
  let seconds = parseInt(document.getElementById("alarmSet").value);
  
  if (seconds <= 0) {
  alert("The number of seconds must be more than 0 please");
  return;
}
   function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  updateDisplay(); // update immediately on click

  const countdown = setInterval(() => {
    seconds--;
    updateDisplay();
    
    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
      document.body.style.backgroundColor = "darkorange";
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
  document.body.style.backgroundColor = "cornflowerblue";
}

window.onload = setup;
