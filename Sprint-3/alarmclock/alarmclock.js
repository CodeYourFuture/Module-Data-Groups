function setAlarm() {
  const userInput=document.getElementById("alarmSet");
  const timeRemain = document.getElementById("timeRemaining");
  let inputTime=userInput.value;
  if (inputTime <= 0 || isNaN(inputTime)) {
    alert("invalid input!!!");
    return;
  }
  console.log(inputTime);
  let min = String(Math.floor(inputTime/60)).padStart(2,"0");
  let sec = String(inputTime%60).padStart(2,"0");
  console.log(min,sec);
  timeRemain.textContent = `Time Remaining: ${min}:${sec}` ;
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
