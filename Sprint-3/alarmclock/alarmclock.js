function setAlarm() {
  const inputAlarmSet = document.querySelector("#alarmSet"); // get input field
  const timeRemaining = document.querySelector("#timeRemaining"); // get time remaining title

  let timeInSeconds = parseInt(inputAlarmSet.value, 10); // read and parse input value
  console.log("time in seconds from input:", timeInSeconds);

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("please enter a valid number of seconds.");
    return;
  }

  timeRemaining.innerText = `time remaining: ${timeInSeconds}`; // display seconds from input
  console.log("updated time remaining from input:", timeInSeconds);
}

// function to format time in mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedRemainingSeconds = String(remainingSeconds).padStart(2, "0");

  console.log(
    "formatted time (mm:ss):",
    `${formattedMinutes}:${formattedRemainingSeconds}`
  );
  return `${formattedMinutes}:${formattedRemainingSeconds}`;
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
module.exports = setAlarm;
