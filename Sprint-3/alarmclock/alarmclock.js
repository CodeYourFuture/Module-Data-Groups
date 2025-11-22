
function setAlarm() {
  const input = document.getElementById("alarmSet") // get the input field
  let timeLeft = Number(input.value); // convert input value to a number

  // validate the input value
  if (!Number.isFinite(timeLeft) || timeLeft <= 0) {  // The Number.isFinite() method is a way to test whether a value 
  // is a finite number value. and also prevents the error if the user types nothing or a negative number.
    return "input is invalid"; //  input is invalid
  }

  updateDisplay(timeLeft); // show the starting time immediately

  if (countdown) {
    clearInterval(countdown)
    // clear previous countdown if running 
    // if a countdown is already running stop it before starting a new one.
  }

  // start countdown
  countdown = setInterval(() => {
    timeLeft -= 1; // reduce time by 1 seconds
    updateDisplay(timeLeft); // update display

    if (timeLeft <= 0) {  // when time reaches 0
      clearInterval(countdown); // stop the countdown
      countdown = null; // reset variable
      playAlarm(); // play the alarm sound

      // change background color when the alarm clock finishes
      document.body.style.backgroundColor = "red";
    }

  }, 1000); // run every one second

  
}
let countdown = null; 

function updateDisplay(totalSeconds) {
  console.log("updating display with", totalSeconds);
  const display = document.getElementById("timeRemaining"); // find h1 element

  if (totalSeconds < 0) totalSeconds = 0; //  safety prevent negative time.

  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0"); // Math.floor method rounds down and return the larges integer less than or equal to a given number.
  const secs = String(totalSeconds % 60).padStart(2, "0"); // calculate remaining seconds.

  display.textContent = `Time Remaining: ${mins}:${secs}`; // update h1 text
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
  audio.currentTime = 0; // reset to start, make sure next time play alarm starts from the beginning.

  // reset the background color to original
  document.body.style.backgroundColor = "";

  if(countdown) {
    clearInterval(countdown); // clearing the interval stops the countdown immediately if user press Stop alarm
    countdown = null;
  }
}

window.onload = setup;



