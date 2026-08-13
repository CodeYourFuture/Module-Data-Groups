function setAlarm() {
  const timeInput = document.getElementById("alarmSet");
  // console.log(timeInput.value);
  let remainingSeconds = timeInput.value;

  const timeRemaining = document.getElementById("timeRemaining");
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds - minutes * 60).padStart(2, "0");

  timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;

  const timer = setInterval(() => {
    remainingSeconds--;
    const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
    const seconds = String(remainingSeconds - minutes * 60).padStart(2, "0");
    timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
    if (remainingSeconds === 0) {
      playAlarm();
      clearInterval(timer);
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
