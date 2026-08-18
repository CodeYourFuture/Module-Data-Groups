let timer;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  // step 1 retrieve input value
  const inputValue = input.value;

  // step 2 validate if input is a number
  const numberValue = Number(inputValue);
  if (isNaN(numberValue)) {
    alert("only enter a valid number.");
    return; // exit a function if not a number
  }

  //step 3 validate if it is an integer
  if (!Number.isInteger(numberValue)) {
    alert("only enter an integer value.");
    return; // exit a function if not an integer
  }

  //step 4  validate if it is greater than 0
  if (numberValue <= 0) {
    alert("only enter a number which is bigger than 0");
    return; //Exit a funciton if not greater than 0
  }

  let timeRemaining = Number(input.value);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  // Show starting time
  heading.innerText = formatTime(timeRemaining);

  // Stop an existing timer
  clearInterval(timer);

  timer = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      timeRemaining = 0;
      heading.innerText = formatTime(timeRemaining);

      clearInterval(timer);
      playAlarm();
      return;
    }

    heading.innerText = formatTime(timeRemaining);
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
