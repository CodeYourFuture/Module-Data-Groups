function setAlarm() {
  changeBackgroundColor("white");
  const maximumSecond = 3599;
  const inputEle = document.getElementById("alarmSet");
  const inputValue = inputEle.value;
  if (inputValue <= 0 || inputValue > maximumSecond) {
    alert("Please make sure your number between 1 to 3599");
    inputEle.value = "";
    return;
  } else {
    let remainingTime = inputValue;
    const countDown = setInterval(function () {
      const displayMessage = document.querySelector("#timeRemaining");

      if (remainingTime > 0) {
        displayMessage.innerText = `Time Remaining: ${formatTime(
          remainingTime
        )}`;
        remainingTime--;
      } else {
        clearInterval(countDown);
        displayMessage.innerText = "Time is up";
        changeBackgroundColor("yellow");
        playAlarm();
      }
    }, 1000);
    input.addEventListener("keyup", checkingInput);
  }
}
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
function formatTime(inputSecond) {
  const minutes = Math.floor(inputSecond / 60);
  const second = inputSecond % 60;
  return `${String(minutes).padStart(2, "0")}:${String(second).padStart(
    2,
    "0"
  )}`;
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
