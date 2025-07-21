let flashColorInterval, secondsInterval;

function setAlarm() {
  const userInput = document.getElementById("alarmSet");

  const inputTime = parseInt(userInput.value);
  if (inputTime <= 0 || isNaN(inputTime)) {
    alert("invalid input!!!");
    return;
  }

  clearInterval(secondsInterval);
  clearInterval(flashColorInterval);
  pauseAlarm();
  let remainingTime = inputTime;
  updateDisplayTime(remainingTime);

  secondsInterval = setInterval(() => {
    remainingTime--;
    updateDisplayTime(remainingTime);
    if (remainingTime === 0) {
      clearInterval(secondsInterval);
      playAlarm();
    }
  }, 1000);
}

function updateDisplayTime(inputTime) {
  const timeRemain = document.getElementById("timeRemaining");
  const min = String(Math.floor(inputTime / 60)).padStart(2, "0");
  const sec = String(inputTime % 60).padStart(2, "0");
  timeRemain.textContent = `Time Remaining: ${min}:${sec}`;
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
  document.getElementById("stop").style.backgroundColor = "rgb(191, 115, 47)";
  document.body.style.backgroundColor = "rgb(218, 178, 119)";
  flashColorInterval = setInterval(() => {
    if (document.body.style.backgroundColor === "rgb(218, 178, 119)") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "rgb(218, 178, 119)";
    }
  }, 500);
}

function pauseAlarm() {
  audio.pause();
  document.getElementById("stop").style.backgroundColor = "rgb(239, 239, 239)";
  clearInterval(flashColorInterval);
  document.body.style.backgroundColor = "white";
}

window.onload = setup;
