let timer;

function setAlarm() {
  timeSet = document.getElementById("alarmSet").value
  const time = countdown(timeSet)
  if (time > 0) {
    countdown(time);
  }
}

function countdown(time) {
  clearInterval(timer);
  let timeRemaining = time;
  if (timeRemaining > 5999) {timeRemaining = 5999};
  UpdateShownTime(timeRemaining)
  
  timer = setInterval(() => {
    timeRemaining -= 1;
    if (timeRemaining == 0 ) {clearInterval(timer); playAlarm();}
    UpdateShownTime(timeRemaining)
  }, 1000)
}

function UpdateShownTime(timeRemaining) {
  let timeRemainingOutput = document.getElementById("timeRemaining");
  let title = document.getElementById("title");
  const formattedTime = convertTime(timeRemaining);
  const printedTime = printTime(formattedTime);
  timeRemainingOutput.textContent = `Time Remaining: ${printedTime}`;
  title.textContent = `Time Remaining: ${printedTime}`;
}

function convertTime(timeSeconds) {
  const seconds = timeSeconds % 60;
  const minutes = (timeSeconds - seconds) / 60;
  console.log([minutes, seconds])
  return [minutes, seconds];
}

function printTime(time) {
  const paddedHours = String(time[0]).padStart(2, "0");
  const paddedSeconds = String(time[1]).padStart(2, "0");
  return paddedHours + ":" + paddedSeconds;
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
