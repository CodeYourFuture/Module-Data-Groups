function setAlarm() {
  const input = document.getElementById("alarmSet");
  const seconds = parseInt(input.value, 10);

  if (isNaN(seconds) || seconds <= 0){
    alert("Please enter a number greater than 0.");
    return;
  } 

  clearInterval(countdown); // Stop any running countdown
  pauseAlarm(); // Stop the alarm sound if it's playing

  remainingSeconds = seconds;
  input.value = ""; 
  updateDisplay(remainingSeconds);

  countdown = setInterval(() => {
    remainingSeconds--;
    updateDisplay(remainingSeconds);
    if (remainingSeconds <= 0) {
      clearInterval(countdown);
      playAlarm();
      document.body.style.backgroundColor = "lightcoral";
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
let countdown;
let remainingSeconds = 0;

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(countdown);
    updateDisplay(0);
  });


  updateDisplay(0); // Show 00:00 on page load
}

function playAlarm() {
  audio.loop = true;
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
  document.body.style.backgroundColor = ""; // Reset background
}

function updateDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${mins}:${secs}`;
}

window.onload = setup;
