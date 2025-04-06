
const textArea = document.querySelector("#alarmSet");
const timeRemaining = document.querySelector("#timeValue");
const stepTime = 100
const startButton = document.querySelector("#set");
let isAudioPlay = false;

textArea.addEventListener('input', function () {
  const value = textArea.value
  timeRemaining.innerHTML = value
});

function setAlarm() {
  let firstReminder = +timeRemaining.innerHTML * 1000;

  // need some improvments to kill setInterval afther complite
  setInterval(() => {
    firstReminder = firstReminder - stepTime;
    console.log(firstReminder)
    timeRemaining.innerHTML = firstReminder;

    if (firstReminder < 0) {
      playAlarm()
      timeRemaining.innerHTML = 0
    }
  }, stepTime);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    console.log("1")
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
