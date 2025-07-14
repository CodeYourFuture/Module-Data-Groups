function setAlarm() {
  let heading = document.getElementById("timeRemaining");
  let seconds = document.getElementById("alarmSet").value;
  updateHeading(heading, seconds);
  let interval = setInterval(function(){
    seconds--;
    updateHeading(heading, seconds);
    if (seconds == 0){
      playAlarm();
      clearInterval(interval);
    }
  }, 1000);
}

function updateHeading(heading, seconds){
  time = formatTime(seconds);
  heading.textContent = "Time Remaining: " + time;
}

function formatTime(seconds){
  let minutes = Math.trunc(seconds/60);
  let remainingSeconds = seconds%60;
  let formattedTime = minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');
  return formattedTime;
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
