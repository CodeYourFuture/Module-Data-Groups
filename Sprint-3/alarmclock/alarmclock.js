function setAlarm() {
  const timer = Number(document.querySelector("#alarmSet").value);
  const timeRemainingEl = document.querySelector("#timeRemaining");

  let targetTime = new Date().getTime() + timer * 1000;

  const doAlarm = setInterval( () => {
    const timeThisSecond = new Date().getTime();
    const timeDifference = targetTime - timeThisSecond;
    const secondsLeft = Math.max(0, Math.ceil(timeDifference / 1000));

    timeRemainingEl.innerHTML = `Time Remaining: ${formatTimeMMSS(secondsLeft)}`;

    if (secondsLeft === 0) {
      playAlarm();
      clearInterval(doAlarm);
    }
  }, 1000);
}

function formatTimeMMSS (seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("pause").addEventListener("click", () => {
      pauseAlarm();
      clearInterval(doAlarm);
    });
      
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
