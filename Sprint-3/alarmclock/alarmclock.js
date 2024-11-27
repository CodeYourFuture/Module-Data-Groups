var input_time = document.querySelector("#alarmSet");
var title_time = document.querySelector("#titleTime");
var timeRemaining = document.querySelector("#timeRemaining");

function setAlarm() {
  
  let totalSeconds = parseInt(input_time.value, 10);
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  
  const title_second = input_time.value % 60;
  const title_minute = (input_time.value - title_second) / 60;

  title_time.innerText = `${title_minute.toString().padStart(2, "0")}:${title_second.toString().padStart(2, "0")}`;

  let timer = setInterval(() =>{
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60;
    timeRemaining.innerText = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    
    if(totalSeconds <= 0){
      clearInterval(timer);
      playAlarm();
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
