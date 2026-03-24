function setAlarm() {
  let timeRemaining = document.getElementById("alarmSet").value;
  const timeDisplay = document.getElementById("timeRemaining");

  // Create a reusable function to update the text on the screen
  const updateDisplay = (time) => {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (time % 60).toString().padStart(2, "0");
    timeDisplay.innerText = "Time Remaining: " + minutes + ":" + seconds;
  };

  // STEP 1: Display the starting time IMMEDIATELY
  updateDisplay(timeRemaining);

  // STEP 2: Start the interval
  const countdown = setInterval(() => {
    timeRemaining--;
    updateDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
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
