let timer;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  // Step 1: Retrieve input value
  const inputValue = input.value;

  // Step 2: Validate if input is a number
  const numberValue = Number(inputValue);
  if (isNaN(numberValue)) {
    alert("Please enter a valid number.");
    return; // Exit if not a number
  }

  // Step 3: Validate if it is an integer
  if (!Number.isInteger(numberValue)) {
    alert("Please enter an integer value.");
    return; // Exit if not an integer
  }

  // Step 4: Validate if it is greater than 0
  if (numberValue <= 0) {
    alert("Please enter a number greater than 0.");
    return; // Exit if not greater than 0
  }

  // If all validation passes
  let timeRemaining = numberValue;

  // Function to format time
  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  // Show starting time
  heading.innerText = formatTime(timeRemaining);

  // Stop existing timer
  clearInterval(timer);

  // Start countdown
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
