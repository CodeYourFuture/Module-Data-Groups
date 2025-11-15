function setAlarm() {
  const timer = Number(document.querySelector("#alarmSet").value);
  const timeRemainingHTML = document.querySelector("#timeRemaining");
  const pageTitle = document.querySelector("title");

  let targetTime = new Date().getTime() + timer * 1000;
  console.log(targetTime);

  const doAlarm = setInterval( () => {
    let timeThisSecond = new Date().getTime();
    let timeDifference = targetTime - timeThisSecond;
    let secondsLeft = Math.max(0, Math.ceil(timeDifference / 1000));

    timeRemainingHTML.innerHTML = `Time Remaining: ${toMMSS(secondsLeft)}`;
    pageTitle.innerHTML = `Time Remaining: ${toMMSS(secondsLeft)}`;

    document.getElementById("pause").addEventListener("click", () => {
        pauseAlarm();
        clearInterval(doAlarm);
      });

    if (secondsLeft === 0) {
      playAlarm();
      clearInterval(doAlarm);
    }
  }, 1000);
}

function toMMSS (seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
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
