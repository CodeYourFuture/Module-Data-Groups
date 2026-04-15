let countdown;

function startTimer(input) {
  const display = document.getElementById("timeRemaining");

  // Validate input
  const timeRemaining = Number(input);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    display.textContent = "Please enter a valid number";
    return;
  }

  let remaining = timeRemaining;

  // Clear any previous timer
  clearInterval(countdown);

  function updateDisplay() {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    display.textContent = `Time Remaining: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  // Show initial time
  updateDisplay();

  countdown = setInterval(() => {
    remaining--;

    updateDisplay();

    if (remaining <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

// :white_check_mark: Fix missing function
function playAlarm() {
  alert("Time's up!");
}