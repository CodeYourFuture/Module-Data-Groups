function setAlarm() {
  let time = Number(document.getElementById("alarmSet").value);
  let heading = document.getElementById("timeRemaining");

  function updateClock() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;

    if (time === 0) {
      clearInterval(timer);
      playAlarm();
    }

    time--;
  }

  updateClock();
  let timer = setInterval(updateClock, 1000);
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
