let countdown;
let timeLeft;
let timeRemainingDisplay = document.getElementById("timeRemaining");

function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let number = Number(input);
  console.log(typeof number);

  let intervalId = setInterval(() => {
    console.log(number);
    number = number - 1;
    timeRemainingDisplay.textContent = `Time Remaining:${number}`;

    if (number === 0) {
      playAlarm();
      clearInterval(intervalId);
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
