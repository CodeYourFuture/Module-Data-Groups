const alarmTimeInput = document.getElementById("alarmSet");
const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
const pauseAlarmButton = document.getElementById("pause");
const timeRemainingDisplay = document.getElementById("timeRemaining");

setAlarmButton.addEventListener("click", setAlarm);
stopAlarmButton.addEventListener("click", stopAlarm);
pauseAlarmButton.addEventListener("click", pauseAlarm);

let countdownInterval;
let flashInterval;
let totalSeconds = 0;
const alarmSound = new Audio("alarmsound.mp3");
let isPaused = false;

function setAlarm() {
  totalSeconds = totalSeconds || parseInt(alarmTimeInput.value);
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid number of seconds for the alarm.");
    alarmTimeInput.value = "";
    return;
  }
  updateTimeRemaining();
  countdown();
  alarmTimeInput.value = "";
}

function stopAlarm() {
  clearInterval(countdownInterval);
  clearInterval(flashInterval);
  countdownInterval = null;
  flashInterval = null;
  totalSeconds = 0;
  updateTimeRemaining();
  alarmTimeInput.value = "";
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

function playAlarm() {
  alarmSound.play();
}

function updateTimeRemaining() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let minuteStr = padNumber(minutes);
  let secondStr = padNumber(seconds);
  let displayTime = "Time Remaining: " + minuteStr + ":" + secondStr;
  timeRemainingDisplay.textContent = displayTime;
}

function padNumber(num) {
  return String(num).padStart(2, "0");
}

function countdown() {
  countdownInterval = setInterval(() => {
    totalSeconds--;
    updateTimeRemaining();
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
      flashInterval = setInterval(() => {
        document.body.style.backgroundColor =
          document.body.style.backgroundColor === "red" ? "white" : "red";
      }, 500);
      setTimeout(() => {
        clearInterval(flashInterval);
        document.body.style.backgroundColor = "white";
      }, 5000);
    }
  }, 1000);
}

function pauseAlarm() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  } else {
    setAlarm(totalSeconds);
  }
  isPaused = !isPaused;
  pauseAlarmButton.textContent = countdownInterval ? "Pause" : "Resume";
}
