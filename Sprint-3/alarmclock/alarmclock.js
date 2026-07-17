function setAlarm() {
  //change the time remaining and set the remaining time
  //into the second.

  let alarmInterval;
  const InputField = document.querySelector("#alarmSet");
  let timeRemaining = InputField.value;

  function updateDisplay() {
    const timedisplay = document.querySelector("#timeRemaining");
    const Minute = Math.floor(timeRemaining / 60);
    const Second = timeRemaining % 60;

    const formatMinute = String(Minute).padStart(2, "0");
    const formatSecond = String(Second).padStart(2, "0");

    timedisplay.innerText = `Time Remaining: ${formatMinute}:${formatSecond}`;
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
  audio.pause();

  clearInterval(alarmInterval);
}

window.onload = setup;
