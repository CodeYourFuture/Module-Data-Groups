function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

const heading = document.querySelector("#timeRemaining");
const stopBtn = document.querySelector("#stop");
heading.innerText = "Time Remaining: 00:00";
const headerText = 'Remaining Time:'

//===========setAlarm======================
function setAlarm() {
  const totalTimeInSeconds = parseInt(
    document.querySelector("#alarmSet").value
  );
  setInitialMinutesAndSeconds(totalTimeInSeconds);
  countDownEverySeconds(totalTimeInSeconds);
}

//=========formatAndDisplayTime=========================
function formatAndDisplayTime(text, minutes, seconds ){
  const formattedMinutes = formatTimeUnit(minutes)
  const formattedSeconds = formatTimeUnit(seconds)
  heading.innerText = `${text} ${formattedMinutes}:${formattedSeconds}`
}

//===============calculateMinutesAndSeconds================
function calculateMinutesAndSeconds(totalTimeInSeconds){
  const totalMinutes = Math.floor(totalTimeInSeconds / 60);
  const remainingSeconds = totalTimeInSeconds % 60;
  return [totalMinutes, remainingSeconds]
}

//=============setInitialMinutesAndSeconds=======================
function setInitialMinutesAndSeconds(totalTimeInSeconds) {
  const [initialMinutes, InitialSeconds] = calculateMinutesAndSeconds(totalTimeInSeconds)
  formatAndDisplayTime(headerText, initialMinutes, InitialSeconds)
}

//================countDownEverySeconds======================
function countDownEverySeconds(totalTimeInSeconds) {
  const setIntervalId = setInterval(() => {
    totalTimeInSeconds--;
    const [totalMinutes, remainingSeconds] = calculateMinutesAndSeconds(totalTimeInSeconds)
    formatAndDisplayTime(headerText, totalMinutes, remainingSeconds)
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
