function setAlarm() {
  let timeLeft = parseInt(document.getElementById("alarmSet").value);
  let display = document.getElementById("timeRemaining");
  // Input validation
  if (isNaN(timeLeft) || timeLeft <= 0) {
      alert("Please enter a valid positive number.");
      return;
  }

  function updateDisplay() {
      let minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
      let seconds = (timeLeft % 60).toString().padStart(2, "0");
      display.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }

  updateDisplay();

  let countdown = setInterval(() => {
      if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
      } else {
          clearInterval(countdown);
          playAlarm();
          document.body.classList.add("flashing"); // Flashing background when alarm goes off
      }
  }, 1000);

  // Stop alarm functionality
  document.getElementById("stop").addEventListener("click", () => {
      clearInterval(countdown);
      pauseAlarm();
      document.body.classList.remove("flashing"); // Remove flashing effect
  });
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
