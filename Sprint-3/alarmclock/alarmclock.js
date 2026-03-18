function setAlarm() {
  const input = document.getElementById("alarmSet").value;

  if (!input || input <= 0) {
    alert("Please enter a valid number");
    return;
  }

  let timeRemaining = parseInt(input);
  const display = document.getElementById("timeRemaining");

  // Show initial time
  display.textContent = `Time Remaining: 00:${timeRemaining
    .toString()
    .padStart(2, "0")}`;

  // Clear any previous timer
  clearInterval(countdown);

  countdown = setInterval(() => {
    timeRemaining--;

    display.textContent = `Time Remaining: 00:${timeRemaining
      .toString()
      .padStart(2, "0")}`;

    if (timeRemaining === 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

let countdown; // 👈 needed for timer control

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
  clearInterval(countdown);
}

window.onload = setup;