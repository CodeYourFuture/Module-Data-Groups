let countDown;
let timeLeft;

function setAlarm() {
  let input= document.getElementById("alarmSet").value;
  let timeRemaining = parseInt(input);
  if(isNaN(timeRemaining)|| timeRemaining<0){
    alert ("Please enter a positive number");
    return;
  }
  
  clearInterval(countDown);

  timeLeft= timeRemaining; // to set left time 
  updateTimeDisplay(timeLeft);// update time display

  countDown = setInterval(()=>{
    if(timeLeft<=0){
      clearInterval(countDown);//when time is up it will clear countDown
      playAlarm();
      return;
    }
      
      updateTimeDisplay(--timeLeft);
    
  }, 1000);// run countdown every 1 second
}

  function updateTimeDisplay(seconds){
    let minute = Math.floor(seconds/60);
    let remainingSeconds= seconds % 60;

     document.getElementById("timeRemaining").innerText ="Time Remaining: " + String(minute).padStart(2,"0")
     + ":" + String(remainingSeconds).padStart(2,"0");
  
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
