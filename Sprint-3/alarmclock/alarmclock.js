function setAlarm() {
  const inputTime = document.getElementById("alarmSet").value;
  const timeDisplay = document.getElementById("timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  const setAlarmButton = document.getElementById("set");
  let countDownInterval;
  const seconds = Number(alarmInput.value);
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  //timeDisplay.textContent = `Time Remaining: ${formatTime(seconds)}`;

  let remainingTime = seconds;

  // Update the display immediately
  timeDisplay.innerText = `Time Remaining: ${formatTime(remainingTime)}`;

  //clearInterval(countDownInterval);
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
    clearInterval(countDownInterval);
  });
  // Start a new interval
  countDownInterval = setInterval(() => {
    remainingTime -= 1;

    if (remainingTime >= 0) {
      // Update the display
      timeDisplay.textContent = `Time Remaining: ${formatTime(remainingTime)}`;
    } else {
      // Stop the countdown when it reaches 0
      clearInterval(countDownInterval);
      timeDisplay.textContent = "Time's up!";
      playAlarm();
    }
  }, 1000);
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
