let countdown
let timeLeft

function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  timeLeft = parseInt(alarmInput.value);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid number which must be greater than 0");
  }

  if (countdown) {
    clearInterval(countdown);
  }

  function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeRemaining.textContent = `Time Remaining: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  
  updateDisplay(); 

  countdown = setInterval(() => {
    timeLeft -= 1;

    if (timeLeft == 0) {
      clearInterval(countdown); 
      timeRemaining.textContent = "Time Remaining: 00:00";
      playAlarm();
    } else {
      updateDisplay(); 
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
