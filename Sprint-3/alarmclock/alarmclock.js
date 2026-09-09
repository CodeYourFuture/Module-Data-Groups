let alarmInterval;

function setAlarm() {
  //change the time remaining and set the remaining time
  //into the second.
  clearInterval(alarmInterval);

  const InputField = document.getElementById("alarmSet");
  let timeRemaining = Number(InputField.value);

  if (!InputField.value || InputField.value < 0) {
    alert("Please enter a valid time in seconds");
    return;
  }

  function updateDisplay() {
    const timeDisplay = document.getElementById("timeRemaining");
    const Minute = Math.floor(timeRemaining / 60);
    const Second = timeRemaining % 60;

    const formatMinute = String(Minute).padStart(2, "0");
    const formatSecond = String(Second).padStart(2, "0");

    timeDisplay.innerText = `Time Remaining: ${formatMinute}:${formatSecond}`;
  }

  updateDisplay();
  //set a variable to count three actions:
  // count -1;
  // Show what is the remaining time;
  // if it goes to zero, beep the sound and stop the counting
  alarmInterval = setInterval(() => {
    timeRemaining = timeRemaining - 1;

    updateDisplay();

    if (timeRemaining === 0) {
      playAlarm();
      clearInterval(alarmInterval);
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
  clearInterval(alarmInterval);
  audio.pause();
}

window.onload = setup;