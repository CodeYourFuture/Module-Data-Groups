function time_convert(num) {
  let minutes = Math.floor((num % 3600) / 60);
  let seconds = num % 60;
  return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}
let currentInterval = null;

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

function setAlarm() {
  if (currentInterval !== null) return;

  const alarmSetInputEl = document.getElementById("alarmSet");
  let timeEl = Number(alarmSetInputEl.value);
  if (!Number.isFinite(timeEl) || timeEl <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }
  const timeRemainingCounterEl = document.getElementById("timeRemaining");
  const button = document.getElementById("set");

  button.disabled = true;

  currentInterval = setInterval(() => {
    timeEl--;

    timeRemainingCounterEl.textContent = `Time Remaining: ${time_convert(timeEl)}`;

    if (timeEl <= 0) {
      clearInterval(currentInterval);
      currentInterval = null; 

      timeRemainingCounterEl.textContent = "Done!";
      playAlarm();
      button.disabled = false;
    }
  }, 1000);
}

function pauseAlarm() {
  if (currentInterval !== null) {
    clearInterval(currentInterval);
    currentInterval = null;

    document.getElementById("set").disabled = false;
  }
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
