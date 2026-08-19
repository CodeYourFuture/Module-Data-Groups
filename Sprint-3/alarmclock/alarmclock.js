let timer;

const audio = new Audio("alarmsound.mp3");

function setAlarm() {
  const form = document.getElementById("ShowForm");
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  // Step 1: retrieve input value
  const inputValue = input.value;

  // Step 2: validate if input is a number
  const numberValue = Number(inputValue);

  // Step 3: validate if it is an integer
  if (!Number.isInteger(numberValue)) {
    alert("Only enter an integer value.");
    return;
  }

  // Step 4: validate if it is greater than 0
  if (numberValue <= 0) {
    alert("Only enter a number which is bigger than 0.");
    return;
  }

  let timeRemaining = numberValue;

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
  pauseAlarm();

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

// Play alarm
function playAlarm() {
  audio.play();
}

// Stop alarm
function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0;
}

// Setup buttons
function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);

  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

window.onload = setup;
