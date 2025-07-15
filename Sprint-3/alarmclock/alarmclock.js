function setAlarm() {
  // get the users input in seconds from the input element
   const inputField = document.getElementById("alarmSet");

   // get the "timeRemaining" element where we show the time
   const timeDisplay = document.getElementById("timeRemaining");

   // convert the users input to a number
   let secondsRemaining = Number(inputField.value);

   // check if input is not a number or less than or equal to zero and informs the user to enter a positive number
   if (isNaN(secondsRemaining) || secondsRemaining <= 0){
    timeDisplay.textContent = "Enter a positive number."; 
    return;
   }

  // format and update the time display with a function 
  function updatedTime(){
    // calculate the number into minutes and seconds
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    // pad the numbers to ensure double digits so it looks right and is easily readable
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeDisplay.textContent = `Time Remaining: ${formattedTime}`;

  }
  updatedTime() // shows the starting time
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
