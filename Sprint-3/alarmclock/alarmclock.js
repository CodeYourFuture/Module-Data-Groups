let countdown;

function setAlarm() {
  let timeInput = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");

  if (isNaN(timeInput) || timeInput <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }
  
  let seconds = parseInt(timeInput);
  updateDisplay(seconds);

  clearInterval(countdown); // Clear any existing countdown

  countdown = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(countdown);
      playAlarm();
      flashBackground();
      return;
    }
    seconds--;
    updateDisplay(seconds);
  }, 1000);
}

function updateDisplay(seconds) {
  let minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${minutes}:${secs}`;
}

function pauseAlarm() {
  clearInterval(countdown);
  audio.pause();
}

function flashBackground() {
  let body = document.body;
  let flashing = setInterval(() => {
    body.style.backgroundColor = body.style.backgroundColor === "red" ? "white" : "red";
  }, 500);
  
  setTimeout(() => clearInterval(flashing), 5000); // Stops flashing after 5 seconds
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
