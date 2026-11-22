function setAlarm() {
  const alarmInput = document.querySelector("#alarmSet");
  const alarmTime = document.querySelector("#timeRemaining");
  const number = alarmInput.value;
  let minute = number % 60;
  let hour = Math.floor(number / 60);
  alarmTime.innerText = `Time Remaining: ${hour}:${minute}`;
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
