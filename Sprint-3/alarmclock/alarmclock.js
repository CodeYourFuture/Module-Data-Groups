const heading = document.querySelector("#timeRemaining");
const stopBtn = document.querySelector("#stop");

const headerText = 'Remaining Time:'
formatAndDisplayTime(0) // displays initial heading with timer values (00:00)

//==========formatTimeUnit============
function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

//===========setAlarm======================
function setAlarm() {
  const totalTimeInSeconds = parseInt(
    document.querySelector("#alarmSet").value
  );
  formatAndDisplayTime(totalTimeInSeconds)
  countDownEverySeconds(totalTimeInSeconds);
}

//=========formatAndDisplayTime=========================
function formatAndDisplayTime(totalTimeInSeconds){
  const totalMinutes = Math.floor(totalTimeInSeconds / 60);
  const remainingSeconds = totalTimeInSeconds % 60;
  const formattedMinutes = formatTimeUnit(totalMinutes)
  const formattedSeconds = formatTimeUnit(remainingSeconds)
  heading.innerText = `${headerText} ${formattedMinutes}:${formattedSeconds}`
}

//================countDownEverySeconds======================
function countDownEverySeconds(totalTimeInSeconds) {
  const setIntervalId = setInterval(() => {
    totalTimeInSeconds--;
    formatAndDisplayTime(totalTimeInSeconds)
    playAudioWhenTimerReachesZero(totalTimeInSeconds, setIntervalId);
  }, 1000);
}

//=================playAudioWhenTimerReachesZero=========================
function playAudioWhenTimerReachesZero(totalTimeInSeconds, setIntervalId) {
  if (totalTimeInSeconds <= 0) {
    clearInterval(setIntervalId);
    changeBackgroundColor();
    playAlarm();
  }
}

// event to pause alarm
stopBtn.addEventListener("click", pauseAlarm);

//===============changeBackgroundColor==============================
function changeBackgroundColor() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#444";
  body.style.color = "white";
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
