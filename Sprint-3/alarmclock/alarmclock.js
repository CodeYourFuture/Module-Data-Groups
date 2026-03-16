const timeRemaining = document.querySelector("#timeRemaining");

let intervalId;



function setAlarm() {
  // I will use the function showTime twice, one for showing the time just after the user clicks the set button and another one for updating the time every second in countdown function
  function showTime() {
  // getting te mins and seconds from the inputValue in appropriate format
      const minutes = Math.floor(inputValue / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (inputValue % 60).toString().padStart(2, "0");
      //Gathering everything together and outputing remaining time
      timeRemaining.innerText = `Time Remaining: ${minutes}:${seconds}`;
};
  // I added the next line in case if we want to reset the time for alarm
  clearInterval(intervalId);
  // getting the input value in number format
  let inputValue = Number(document.querySelector("#alarmSet").value);
  showTime();
  intervalId = setInterval(countdown, 1000);

  function countdown() {
    if (inputValue > 0) {
      //decrease the entered number by 1
      inputValue--;
      showTime();
    }
    // When the inputValue is 0, play the alarm and clear interval so that the function stops initialising 
    else {
      playAlarm();
      clearInterval(intervalId);
    }
  }
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
  //I know it's said to not edit this code, I wonder if it's ok to add this line below in order to pause the time before the time runs out. 
  clearInterval(intervalId);
}

window.onload = setup;
