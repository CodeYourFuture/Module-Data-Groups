function time_convert(num) {
  let minutes = Math.floor((num % 3600) / 60);
  let seconds = num % 60;
  return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}
function setAlarm() {
  const alarmSetInputEl = document.getElementById("alarmSet");
  let timeEl = Number(alarmSetInputEl.value); 
  const timeRemainingCounterEl = document.getElementById("timeRemaining");
  const interval = setInterval(() => {
    timeEl--; 

    timeRemainingCounterEl.textContent = `Time Remaining: ${time_convert(timeEl)}`;

    if (timeEl <= 0) {
      clearInterval(interval);
      timeRemainingCounterEl.textContent = "Done!";
      playAlarm();
    }
  }, 1000);
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

