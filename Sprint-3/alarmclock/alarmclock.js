let intervalId = null;
let totalSeconds = 0;

function formatTime(seconds){
  const minutes = Math.floor(seconds/ 60);
  const secs = seconds % 60;
  return `${string(minutes).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

}
function setAlarm() {
  

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
