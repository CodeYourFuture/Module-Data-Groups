const audio = new Audio("alarmsound.mp3");
let countdownInterval;
let remainingTime = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay(time) {
  const timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerText = `Time Remaining: ${formatTime(time)}`;
}

function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  remainingTime = parseInt(inputField.value, 10);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  updateDisplay(remainingTime);

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    remainingTime--;

    if (remainingTime >= 0) {
      updateDisplay(remainingTime);
    }

    if (remainingTime === 0) {
      playAlarm();
      clearInterval(countdownInterval);
      flashBackground();
    }
  }, 1000);
}

function stopAlarm() {
  clearInterval(countdownInterval);
  audio.pause();
  resetBackground();
}

function playAlarm() {
  audio.play();
}

function flashBackground() {
  const body = document.body;
  let isFlashing = false;
  const flashInterval = setInterval(() => {
    body.style.backgroundColor = isFlashing ? "#fff" : "#ff6666";
    isFlashing = !isFlashing;
  }, 500);

  setTimeout(() => {
    clearInterval(flashInterval);
    resetBackground();
  }, 5000);
}

function resetBackground() {
  document.body.style.backgroundColor = "";
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", stopAlarm);
}

window.onload = setup;

// DO NOT EDIT BELOW HERE

// var audio = new Audio("alarmsound.mp3");

// function setup() {
//   document.getElementById("set").addEventListener("click", () => {
//     setAlarm();
//   });

//   document.getElementById("stop").addEventListener("click", () => {
//     pauseAlarm();
//   });
// }

// function playAlarm() {
//   audio.play();
// }

// function pauseAlarm() {
//   audio.pause();
// }

// window.onload = setup;
