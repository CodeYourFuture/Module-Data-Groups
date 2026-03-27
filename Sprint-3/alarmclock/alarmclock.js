function setAlarm() {
  const userInput = document.querySelector("#alarmSet").value;
  let timeRemaining = userInput;

  const myInterval = setInterval(function () {
    timeRemaining -= 1;
    const charactersLeftP = document.querySelector("#timeRemaining");
    charactersLeftP.innerText = `Time Remaining ${timeRemaining}`;

    if (timeRemaining === 0) {
      playAlarm();
      clearInterval(myInterval);
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
