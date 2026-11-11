function setAlarm() {}

function formatTime(totalSeconds){
  // converts the seconds to minutes and seconds and returns "mm:ss"
  const convertToMinutes = Math.floor(totalSeconds / 60)
  const remainderSeconds = totalSeconds % 60
  const paddedMinutes = String(convertToMinutes).padStart(2, "0")
  const paddedSeconds = String(remainderSeconds).padStart(2, "0")
  return `${paddedMinutes}:${paddedSeconds}`
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
