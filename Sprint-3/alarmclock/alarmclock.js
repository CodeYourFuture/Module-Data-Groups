//This holds the ID returned by setInterval so that we can later stop the countdown using clearInterval.
let countdownInterval; 
//keeps track of how many seconds are remaining in countdown 
let timeRemaining = 0; 
function setAlarm() {
  document.body.style.backgroundColor = "";
  //This ensures that if a previous countdown was running it stops before starting a new one.
  clearInterval(countdownInterval); 
  //gets the input element (<input id="alarmSet">) and reads its value.
  const inputTime = document.querySelector("#alarmSet"); 
  //This converts are string input to a Number with a base of 10
  timeRemaining = parseInt(inputTime.value, 10); 
  //These if conditions will make sure that our input is validated and always a number, not zero or a negative number.
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }
  //This will update the userInterface immediately so we can see when countdown begins without the one second delay.
  updateTitle()
  //setInterval is a js function that when given a function it repeats it at a set interval
  countdownInterval = setInterval(() => {
    timeRemaining--;
    //when time remaining goes 0 or below 0. stop countdown and call playAlarm() and update display to 00:00.
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      playAlarm(); 
      updateTitle(); 
      document.body.style.backgroundColor = "green";
    } else {
      updateTitle(); 
    }
  }, 1000);
}
function updateTitle() {
  const title = document.getElementById("timeRemaining");
  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0"); //gives full minutes,always ensuring it shows 2 digits
  const seconds = String(timeRemaining % 60).padStart(2, "0");//gives remaining seconds,always ensuring it shows 2 digits
  title.textContent = `Time Remaining: ${minutes}:${seconds}`;
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
