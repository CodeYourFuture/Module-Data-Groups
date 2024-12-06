var inputTime = document.querySelector("#alarmSet");
var titleTime = document.querySelector("#titleTime");
var timeRemaining = document.querySelector("#timeRemaining");
var userStopped = false;
function setAlarm() {
  
  let totalSeconds = parseInt(inputTime.value, 10);
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  
  document.getElementById("set").disabled = true;

  const title_second = inputTime.value % 60;
  const title_minute = (inputTime.value - title_second) / 60;

  titleTime.innerText = `${title_minute.toString().padStart(2, "0")}:${title_second.toString().padStart(2, "0")}`;

  let timer = setInterval(() =>{
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60;
    timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    
    if(totalSeconds <= 0){
      clearInterval(timer);
      playAlarm();
      document.getElementById("set").disabled = false;
    }
    else if(userStopped){
      document.getElementById("set").disabled = false;
      clearInterval(timer);
      

    }
    else{
      
      totalSeconds--;
    }
    
  }, 1000);

}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    userStopped = false;
    setAlarm();
    pauseAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    userStopped = true;
    clearInterval(timer);
    
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
