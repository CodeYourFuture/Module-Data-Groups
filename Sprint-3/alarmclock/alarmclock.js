let countdown; // Global variable for the interval

function setAlarm() {
  const alarmInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");

  let timeLeft = parseInt(alarmInput.value); // Get the input value as a number

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }

  timeRemaining.innerHTML = `Time Remaining: ${formatTime(timeLeft)}`; // Update display

  clearInterval(countdown); // Clear any existing countdown
  countdown = setInterval(() => {
    timeLeft--;
    timeRemaining.innerHTML = `Time Remaining: ${formatTime(timeLeft)}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }
  }, 1000); // Update every second
}

function stopAlarm() {
  console.log("Stopping the alarm...");
  clearInterval(countdown); // Stop the countdown
  alert("Alarm stopped!");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
