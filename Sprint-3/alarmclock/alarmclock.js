function calculateAndUpdate(seconds, timeRemaining) {
  let mm = String(Math.floor(seconds / 60)).padStart(2, 0);
  let ss = String(seconds % 60).padStart(2, 0);
  timeRemaining.innerText = `Time Remaining: ${mm}:${ss}`;
}

function setAlarm() {
  let seconds = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  const alarmInputField = document.getElementById("alarmInputField");

  if (seconds > 0) {
    calculateAndUpdate(seconds, timeRemaining);

    const intervalId = setInterval(() => {
      seconds -= 1;
      calculateAndUpdate(seconds, timeRemaining);

      if (seconds == 0) {
        clearInterval(intervalId);
        playAlarm();
        document.body.classList.add("flash-background");
      }
    }, 1000);
  }
}

document.getElementById("stop").addEventListener("click", () => {
  document.body.classList.remove("flash-background");
});

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
