function setAlarm() {
  //Converting the time of now value to seconds from milliseconds
  //Getting the time value from the input field, converting it into number, this will be in seconds
  const alarmTime = Number(document.getElementById("alarmSet").value) +  Math.floor(Date.now()/1000);;
  
   document.getElementById('timeRemaining').innerText="Time Remaining: "+timeFormatter(alarmTime-Math.floor(Date.now()/1000));

  const checkAlarm=setInterval(() => {
    
    //Calculating current time inside the interval
    const currentTime=Math.floor(Date.now()/1000);

    //Calculating the difference between the alarm time and the current time
    const diff = alarmTime - currentTime;

    //Updating the time remaining text in the HTML element
    document.getElementById('timeRemaining').innerText="Time Remaining: "+timeFormatter(diff);

    

    //If the difference is less than or equal to zero, stop the interval and play the alarm sound
    if(diff <= 0){
      clearInterval(checkAlarm);
      playAlarm();
      
      
      // return;
    }
  }, 1000);
}

//formatting remaining seconds in the format of MM:SS
function timeFormatter(seconds) {
  const remainingSeconds= seconds % 60;
  const remainingMinutes = Math.floor(seconds / 60);
  return `${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

let flashInterval;  // To store the interval ID for flashing

function flashBackground() {
  let isRed = false;
  
  flashInterval = setInterval(() => {
    // Toggle the background color between red and white
    document.body.style.backgroundColor = isRed ? '#FDF7FA' : '#D67AB1';
    isRed = !isRed;
  }, 1000); // Flash every second
}


function stopFlashing() {
  clearInterval(flashInterval);  // Stop the flashing by clearing the interval
  document.body.style.backgroundColor = 'white';  // Reset the background color
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
  //to flash background
  flashBackground();
}

function pauseAlarm() {
  audio.pause();
  //to stop flashing background
  stopFlashing();
}

window.onload = setup;
