let alarmInterval;

function setAlarm() {
  const userInput = document.getElementById("alarmSet");
  let inputValue = parseInt(userInput.value);  
  // console.log(typeof inputValue)

  const timeRemainingField = document.getElementById("timeRemaining");
  // console.log(timeRemainingField);

  function getFormattedTime(time){
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  timeRemainingField.textContent = `Time Remaining: ${getFormattedTime(inputValue)}`;
  // console.log(timeRemainingField);

  alarmInterval = setInterval(() => {
    inputValue -= 1;

    if (inputValue <= 0) {
      clearInterval(alarmInterval);
      timeRemainingField.textContent = "Time Remaining: 00:00";
      playAlarm();
    } else {
      timeRemainingField.textContent = `Time Remaining: ${getFormattedTime(inputValue)}`;
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
