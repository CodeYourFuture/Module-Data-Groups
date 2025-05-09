function setAlarm() {
  const seconds = parseInt(document.getElementById("alarmTime").value, 10);

  if (isNaN(seconds) || seconds < 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  setTimeout(playAlarm, seconds * 1000);
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
