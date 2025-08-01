function setAlarm() {
  const timeInput = document.getElementById("alarmSet"); // now matches the HTML
  const seconds = parseInt(timeInput.value, 10);

  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
let remainingSeconds = seconds;

const showTime = setInterval(() => {
  if (remainingSeconds <= 0) {
    clearInterval(showTime);
    playAlarm();
    return;
  }

  remainingSeconds--;

  const mins = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const secs = String(remainingSeconds % 60).padStart(2, "0");

  document.getElementById("timeRemaining").innerText = `Time Remaining: ${mins}:${secs}`;
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
