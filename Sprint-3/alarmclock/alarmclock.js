let countDown;
function setAlarm() {
  changeBackgroundColor("white");
  const maximumSecond = 3599;
  const inputEle = document.getElementById("alarmSet");
  const inputValue = parseInt(inputEle.value, 10);
  const displayMessage = document.querySelector("#timeRemaining");

  if (isNaN(inputValue) || inputValue <= 0 || inputValue > maximumSecond) {
    alert("Please make sure your number between 1 to 3599");
    inputEle.value = "";
    return;
  }
  if (countDown) {
    clearInterval(countDown);
  }
  let remainingTime = inputValue;
  countDown = setInterval(function () {
    if (remainingTime > 0) {
      displayMessage.innerText = `Time Remaining: ${formatTime(remainingTime)}`;
      remainingTime--;
    } else {
      clearInterval(countDown);
      displayMessage.innerText = "Time is up";
      inputEle.value = "";
      changeBackgroundColor("yellow");
      playAlarm();
    }
  }, 1000);
}
//add another stop alarm button event listener and I know this is not good approach for two eventlistener for one stop button but i can not edit for restriction
document.getElementById("stop").addEventListener("click", () => {
  stopAlarm();
});
function stopAlarm() {
  const inputEle = document.getElementById("alarmSet");
  const displayMessage = document.querySelector("#timeRemaining");

  if (countDown) clearInterval(countDown);
  displayMessage.innerText = "Time Remaining: 00:00 ";
  inputEle.value = "";
  changeBackgroundColor("white");
  pauseAlarm();
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
function formatTime(inputSecond) {
  const minutes = Math.floor(inputSecond / 60);
  const second = inputSecond % 60;
  return `${changePadTwo(minutes)}:${changePadTwo(second)}`;
}
function changePadTwo(inputString) {
  return String(inputString).padStart(2, "0");
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
