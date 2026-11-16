function setAlarm() {
  const inputTime = document.querySelector("#alarmSet");
  const timeRemaining = document.querySelector("#timeRemaining");
  timeRemaining.textContent = `Time Remaining: ${Math.floor(
    inputTime.value / 60
  )
    .toString()
    .padStart(2, "0")}:${(inputTime.value % 60).toString().padStart(2, "0")}`;

  const toStop = setInterval(alarmCount, 1000);

  function alarmCount() {
    if (inputTime.value == 0) {
      clearInterval(toStop);
      playAlarm();
    } else {
      inputTime.value--;
      updateInput();
    }
  }

  function updateInput() {
    const minutes = Math.floor(inputTime.value / 60);
    const seconds = inputTime.value % 60;
    timeRemaining.textContent = `Time Remaining: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
}
//const toStop = setInterval(alarmCount, 1000);

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
