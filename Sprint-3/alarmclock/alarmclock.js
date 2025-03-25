function setAlarm() {
  
  let timeValue = document.querySelector("input").value;


  // if text box have value 
  if (timeValue.length != 0)
  {

    function updateTimer()
    {
    
    // get the h1 element 
    let timeLabel = document.querySelector("#timeRemaining");

    let minutes , seconds = 0;

    minutes = Math.floor(timeValue/60); // get the minutes from the value 
    seconds = timeValue%60; // get the seconds from the value 

    timeLabel.textContent = "Time Remaining: " + `${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`;

    //reduce 1 to the time 
    timeValue--;  

    //if the time counting reach to 0
    if (timeValue < 0)
    {
      // clear the interval 
      clearInterval(timer);

      //play the sound 
      playAlarm();
    }  
   
      
    
   } 

  }

  let timer = setInterval(updateTimer,1000)
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
