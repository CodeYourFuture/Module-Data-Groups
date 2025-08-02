function setAlarm() {
  // Get the input value from the alarm input field
  const inputNum = document.getElementById("alarmSet");
  let alarmTime = Number(inputNum.value);

  // Update the time remaining display
  updateTimeRemaining(alarmTime);

  //Setting the interval so that when one second passes, the time remaining will be updated
  let countdownInterval = setInterval(() => {
    alarmTime--;

    if (alarmTime <= 0) {
      clearInterval(countdownInterval);
      updateTimeRemaining(0);
      document.body.style.backgroundColor = "red";
      playAlarm();
    } else {
      updateTimeRemaining(alarmTime);
    }
  }, 1000);
}

function updateTimeRemaining(seconds) {
  // Converting the input value into a time format
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedTime = `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;

  // Set the alarm time in the Time remaining display
  document.getElementById("timeRemaining").innerText =
    "Time remaining: " + formattedTime;
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
