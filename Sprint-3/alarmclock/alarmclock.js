function setAlarm() {
  timeRemaining = document.getElementById("timeRemaining")
  timeSet = document.getElementById("alarmSet").value
  const time = convertTime(timeSet)
  
  


  timeRemaining.textContent = `Time Remaining: ${remainingMinutes}:${remainingSeconds}`
}

function countdown(time) {
  setInterval(() => {
    
  }, 1000)
}

function convertTime(timeSeconds) {
  if (timeSeconds > 5999) {return [99, 59]};
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

printTime([50,40])
printTime([50,4])
printTime([5,40])

convertTime(5000000)
convertTime(50)
convertTime(500)
convertTime(5000000)

/*
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
*/