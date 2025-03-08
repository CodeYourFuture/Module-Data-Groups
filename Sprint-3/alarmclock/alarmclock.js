function setAlarm() {
  const input = document.querySelector("input");
  time = input.valueAsNumber;
  function changeDisplayTime(time) {
    minutesRemaining = Math.floor(time / 60).toString();
    paddedMinutesRemaining = minutesRemaining.padStart(2, "0");
    secondsRemaining = (time % 60).toString();
    paddedSecondsRemaining = secondsRemaining.padStart(2, "0");
    const timeRemaining = `${paddedMinutesRemaining}:${paddedSecondsRemaining}`;
    const charactersLeftP = document.querySelector("#timeRemaining");
    charactersLeftP.innerText = `Time Remaining: ${timeRemaining}`;
    
  }
  function deduction() {
    changeDisplayTime(time)
    if (time == 0) {
      clearInterval(timerId)
    }
    --time
  }
  let timerId = setInterval(deduction, 1000)
}
function pauseAlarm() {
  clearInterval(timerId)
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
