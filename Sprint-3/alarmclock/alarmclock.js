const textArea = document.querySelector("#alarmSet");
const timeRemaining = document.querySelector("#timeValue");
const startButton = document.querySelector("#set");
let isAudioPlay = false;
let intervalId = null;

textArea.addEventListener('input', function () {
  const value = textArea.value;
  timeRemaining.innerHTML = value;
});

function setAlarm() {
  let firstReminder = +timeRemaining.innerHTML * 1000;
 
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    firstReminder -= 100;

    if (firstReminder <= 0) {
      clearInterval(intervalId); 
      intervalId = null; 
      timeRemaining.innerHTML = 0; 
      if (!isAudioPlay) {
        playAlarm(); 
        isAudioPlay = true;
      }
    } else {
  
      timeRemaining.innerHTML = (firstReminder / 1000).toFixed(1);
    }
  }, 100);
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0; 
  isAudioPlay = false;

  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
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

// function pauseAlarm() {
//   audio.pause();
// }

window.onload = setup;
