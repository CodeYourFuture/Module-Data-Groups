//set alarm
let countdown;

function setAlarm(){
  clearInterval(countdown);

    const timeRemaining = document.querySelector("#timeRemaining");
    let secondsLeft=parseInt(alarmInput.value)
    countdown=setInterval(function(){
    timeRemaining.innerText = `Time Remaining: 00:${secondsLeft}`
    if (secondsLeft === 0) {
      playAlarm();
      clearInterval(countdown)
    }else{secondsLeft--;}
    },1000); 
}

const alarmInput=document.querySelector("#alarmSet");
const setAlarmButton=document.querySelector("#set");
setAlarmButton.addEventListener("click",setAlarm);

//stop alarm
const stopAlarmButton=document.querySelector("#stop");
stopAlarmButton.addEventListener("click",function(){
  pauseAlarm();
 clearInterval(countdown)
 
})








// DO NOT EDIT BELOW HERE.

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
