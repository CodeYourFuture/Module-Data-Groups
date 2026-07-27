let timer = null;

function updateHeading(secondsRemaining) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
}

function setAlarm() {
  if (timer) {
    clearInterval(timer);
  }

const input = document.getElementById("alarmSet").value;
let secondsRemaining = Number(input);

if (!Number.isInteger(secondsRemaining) || secondsRemaining <= 0) {
  alert("Please enter a valid positive number of seconds.");
  return;
}


  updateHeading(secondsRemaining);

  timer = setInterval(() => {
    secondsRemaining--;

    if (secondsRemaining >= 0) {
      updateHeading(secondsRemaining);
    }

    if (secondsRemaining === 0) {
      playAlarm();
      clearInterval(timer);

      // Optional extra task - flash the background
      let flash = false;

      setInterval(() => {
        document.body.style.backgroundColor = flash ? "white" : "red";
        flash = !flash;
      }, 500);
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
