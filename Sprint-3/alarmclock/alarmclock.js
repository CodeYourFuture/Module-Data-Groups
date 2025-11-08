function setAlarm() {
  const alarmSetInputElement = document.getElementById("alarmSet");
  const timeRemainingElement = document.getElementById("timeRemaining");
  let seconds = Number(alarmSetInputElement.value);

  const updateTimeRemaining = () => {
    seconds--;

    if (seconds === 0) clearInterval(intervalID);

    const timeString = new Date(seconds * 1000).toLocaleTimeString([], {
      minute: "numeric",
      second: "numeric",
    });

    timeRemainingElement.innerHTML = `Time Remaining: ${timeString}`;
  };

  const delay = 1 * 1000;
  const intervalID = window.setInterval(updateTimeRemaining, delay);
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
