// alarmclock.js
function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  let timeRemaining = Number(timeInput.value);
  const heading = document.getElementById("timeRemaining");

  function updateDisplay() {
    const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
    const seconds = String(timeRemaining % 60).padStart(2, "0");
    heading.textContent = `Time Remaining: ${minutes}:${seconds}`;
  }

  updateDisplay(); // Show initial time

  const timer = setInterval(() => {
    timeRemaining--;
    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

function playAlarm() {
  const audio = document.getElementById("alarm");
  audio.play();
}

// Only attach this in browser, not during testing
if (typeof document !== "undefined") {
  const button = document.getElementById("set");
  if (button) {
    button.addEventListener("click", setAlarm);
  }
}

module.exports = { setAlarm, playAlarm }; // Make functions testable
