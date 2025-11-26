function updateDisplay(heading, time) {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
}

function setAlarm() {
  let time = Number(document.getElementById("alarmSet").value);
  const heading = document.getElementById("timeRemaining");

  audio.loop = true;
  document.body.style.backgroundColor = "";

  updateDisplay(heading, time);

  const intervalId = setInterval(() => {
    time--;

    if (time <= 0) {
      clearInterval(intervalId);
      updateDisplay(heading, 0);

      document.body.style.backgroundColor = "red";

      playAlarm();
    } else {
      updateDisplay(heading, time);
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
