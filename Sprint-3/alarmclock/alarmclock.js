function setAlarm() {
  const maximumSecond = 3599;
  const inputEle = document.getElementById("alarmSet");
  const inputValue = inputEle.value;
  if (inputValue <= 0 || inputValue > maximumSecond) {
    alert("Please make sure your number between 1 to 3599");
    inputEle.value = "";
  }
  const displayMessage = document.querySelector("#timeRemaining");
  displayMessage.innerText = `Something is coming ${inputValue}`;
  input.addEventListener("keyup", checkingInput);
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
