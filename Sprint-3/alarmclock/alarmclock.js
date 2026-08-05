let timeRemaining = 0;
let intervalId = null;
let isPaused = false;

function reset() {}

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const value = input.value.trim();//trim empty string 
  //Check if the input is empty 
  if(value ===""){
    alert("Please enter a number of seconds .");
  }

  const seconds = Number(input.value);
//validate that input is a positive integer and doestn't exceed 1 hour
  if (
    isNaN(seconds) ||
    !Number.isInteger(seconds) ||
    seconds <= 0 ||
    seconds > 3600
  ) {
    alert("Please enter a valid whole number between 1 and 3600.");
    return;
  }

  timeRemaining = seconds;
  isPaused = false;
  updateDisplay(timeRemaining);

  // Clear any previous countdown
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Start a new countdown
  startCountdown();
}

function startCountdown(){
  intervalId = setInterval(() => {
    timeRemaining--;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      isPaused =true;
      playAlarm();
      document.body.classList.add("flash");
    }
  }, 1000);

}

function updateDisplay(seconds) {
  const title = document.getElementById("timeRemaining");


  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  title.textContent = `Time Remaining: ${mins}:${secs}`;
}
function togglePause() {
  if (intervalId === null && !isPaused) {
    return;
  }
  if (!isPaused) {
    clearInterval(intervalId);
    isPaused = true;
  } else {
    isPaused = false;
    startCountdown();
  }
}

document.getElementById("pause").addEventListener("click", togglePause);


document.getElementById("stop").addEventListener("click", () => {
  document.body.classList.remove("flash");
});


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
