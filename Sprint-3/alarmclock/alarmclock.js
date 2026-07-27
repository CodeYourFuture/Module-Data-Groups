let countDownId = null;
let secondsTillEnd = 0;
let offFlashButton = document.getElementById("flash");
offFlashButton.addEventListener("click", () => {
  flashAlarm("off");
});

function setAlarm() {
  // Get input from user
  const input = document.getElementById("alarmSet").value;
  const seconds = parseInt(input);

  // Validate input
  if (isNaN(seconds) || seconds < 0) {
    alert("Please enter a valid number of seconds");
    return;
  }
  // Clear any existing countdown
  if (countDownId) {
    clearInterval(countDownId);
  }
  flashAlarm("off");
  secondsTillEnd = seconds;

  // Update heading
  updateHeading(secondsTillEnd);

  // Start countdown
  countDownId = setInterval(() => {
    secondsTillEnd--;

    // Play alarm if end reached
    if (secondsTillEnd <= 0) {
      clearInterval(countDownId);
      updateHeading(0);
      playAlarm();
      flashAlarm();
    } else {
      updateHeading(secondsTillEnd);
    }
  }, 1000);
}

function updateHeading(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  document.getElementById("timeRemaining").innerText = formattedTime;
  return;
}

function flashAlarm(mode = "on") {
  const alarmDiv = document.getElementsByClassName("centre")[0];
  if (mode === "off") {
    alarmDiv.classList.remove("flash");
  } else {
    alarmDiv.classList.add("flash");
  }
  return;
}

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
