let timeRemaining = 0;
let intervalId = null;
let isPaused = false;


function setAlarm() {
  const input = document.getElementById("alarmSet");

  const seconds = Number(input.value);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  timeRemaining = seconds;
  updateDisplay(timeRemaining);

  // Clear any previous countdown
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Start a new countdown
  intervalId = setInterval(() => {
    timeRemaining--;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
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
  if (!isPaused) {
    clearInterval(intervalId);
    isPaused = true;
  } else {
    isPaused = false;
    intervalId = setInterval(() => {
      timeRemaining--;
      updateDisplay(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        playAlarm();
        document.body.classList.add("flash");
      }
    }, 1000);
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
