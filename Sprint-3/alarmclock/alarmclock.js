function setAlarm() {
  let time = Number(document.getElementById("alarmSet").value);
  const heading = document.getElementById("timeRemaining");

  audio.loop = true;

  document.body.style.backgroundColor = "";

  function updateDisplay(t) {
    const minutes = String(Math.floor(t / 60)).padStart(2, "0");
    const seconds = String(t % 60).padStart(2, "0");
    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }

  updateDisplay(time);

  const intervalId = setInterval(() => {
    time--;

    if (time <= 0) {
      clearInterval(intervalId);
      updateDisplay(0);

      document.body.style.backgroundColor = "red";

      playAlarm();

    } else {
      updateDisplay(time);
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
