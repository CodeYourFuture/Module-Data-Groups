function setAlarm() {
  const userInput=document.getElementById("alarmSet");
  
  let inputTime=userInput.value;
  if (inputTime <= 0 || isNaN(inputTime)) {
    alert("invalid input!!!");
    return;
  }
  updateDisplayTime(inputTime);
  let secondsInterval=setInterval(() => {
    inputTime--;
    updateDisplayTime(inputTime);
    if ((inputTime === 0)) {
      playAlarm();
      clearInterval(secondsInterval);
           
    } 
  }, 1000);
 
}



function updateDisplayTime(inputTime){
  const timeRemain = document.getElementById("timeRemaining");
  let min = String(Math.floor(inputTime / 60)).padStart(2, "0");
  let sec = String(inputTime % 60).padStart(2, "0");
  timeRemain.textContent = `Time Remaining: ${min}:${sec}`;
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
  document.getElementById("stop").style.backgroundColor = "rgb(191, 115, 47)";
   document.body.style.backgroundColor = "rgb(218, 178, 119)";
}

function pauseAlarm() {
  audio.pause();
  document.getElementById("stop").style.backgroundColor = "rgb(239, 239, 239)";
  
}

window.onload = setup;
