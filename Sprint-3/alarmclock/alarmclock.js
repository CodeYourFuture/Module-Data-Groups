const alarmSet = document.querySelector("#alarmSet");
const alarmCount = document.querySelector("#alarmCount");
const pauseBtn = document.querySelector("#pause");
let countdown;
let remainingTime;
let isPaused = false;

function setAlarm(time) {
  remainingTime = time;
  alarmCount.innerText = convertSeconds(remainingTime);  
  
  clearInterval(countdown);
  pauseAlarm();

  countdown = setInterval(() => {
    if (remainingTime <= 0){
      playAlarm();
      clearInterval(countdown);
    }else {
      remainingTime -= 1;
      alarmCount.innerText = convertSeconds(remainingTime);
    }
  }, 1000)
  alarmSet.value = "";
  isPaused = false;
  pauseBtn.innerText = "Pause Alarm";
}

function stopAlarm(){
  clearInterval(countdown);
  alarmCount.innerText = convertSeconds(0);
  pauseAlarm();
  isPaused = false;
  pauseBtn.innerText = "Pause Alarm";
}


function pausingAlarm(){
  console.log("Pause button clicked");
  if (!isPaused){
    clearInterval(countdown);
    pauseAlarm();
    pauseBtn.innerText = "Resume Alarm";
    isPaused = true;
  } else {
    countdown = setInterval(() => {
      if (remainingTime <= 0) {
        playAlarm();
        clearInterval(countdown);
      } else {
        remainingTime -= 1;
        alarmCount.innerText = convertSeconds(remainingTime);
      }
    }, 1000);
    pauseBtn.innerText = "Pause Alarm";
    isPaused = false;
  }
}
function convertSeconds(seconds) {
  let mm = Math.floor(seconds / 60);
  let ss = seconds % 60;
  let clockDisplay = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  return clockDisplay;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm(alarmSet.value);
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pausingAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
