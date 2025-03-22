let timerInterval = null;
let timeRemaining = 0; 
let isPaused = false; 

function setAlarm() {
  let setButton = document.getElementById("set");
  let pauseButton = document.getElementById("pause");
  let inputSeconds = parseInt(document.getElementById("alarmSet").value, 10);


  if (isNaN(inputSeconds) || inputSeconds <= 0) {
    alert("Please enter a valid number of seconds!");
    return;
  }

  timeRemaining = inputSeconds;
  updateDisplay();

  pauseButton.disabled = false;

  clearInterval(timerInterval);
  timerInterval = setInterval(countdown, 1000);

  setButton.classList.add("blinking", "active");
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function countdown() {
    if (!isPaused && timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();
      if (timeRemaining === 0) {
          clearInterval(timerInterval);
          playAlarm();
          disableButtons();
        }
    }
}

function setup() {
  /*document.getElementById("set").addEventListener("click", () => {
    setAlarm();
    document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });*/
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);
  document.getElementById("pause").addEventListener("click", pauseAlarm);
  document.getElementById("pause").disabled = true;
}

function playAlarm() {
  audio.currentTime = 0;
  audio.play();
  document.body.classList.add("bg-blinking");
}

function pauseAlarm() {
   //audio.pause();
  if (timeRemaining > 0) {
    isPaused = !isPaused;
    document.getElementById("pause").textContent = isPaused ? "continue" : "pause";
  }
  if (isPaused) {
    document.getElementById("pause").classList.add("blinking", "paused", "bg-blinking" );
    document.getElementById("set").classList.remove("blinking", "active");
  } else {
    //timerInterval = setInterval(countdown, 1000);b
    document.getElementById("pause").classList.remove("blinking", "paused", "bg-blinking" );
    document.getElementById("set").classList.add("blinking", "active");
  }
}
function stopAlarm() {
  clearInterval(timerInterval);
  audio.pause();
  audio.currentTime = 0;
  timeRemaining = 0;
  isPaused = false;
  updateDisplay();
  enableButtons();
  document.body.classList.remove("bg-blinking");
  document.getElementById("set").classList.remove("blinking", "active");
  document.getElementById("pause").classList.remove("blinking", "paused", "bg-blinking" );
}

function updateDisplay() {
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(timeRemaining)}`;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function disableButtons() {
  document.getElementById("set").disabled = true;
  document.getElementById("pause").disabled = true;
}

function enableButtons() {
  document.getElementById("set").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("pause").textContent = "pause";
}
window.onload = setup;


