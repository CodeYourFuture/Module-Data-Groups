const timeRemaining = document.querySelector("#timeRemaining");

let intervalId; //declared here so that I can use it in line-17, before asigning on line 21.
const alarmSetInput = document.querySelector("#alarmSet");

function setAlarm() {

  // I will use the function showTime twice, one for showing the time just after the user clicks the set button and another one for updating the time every second in countdown function
  function showTime(inputValue) {
    // getting the mins & sec from the inputValue(line19) in appropriate format
    const minutes = Math.floor(inputValue / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (inputValue % 60).toString().padStart(2, "0");
    //Gathering everything together and outputing remaining time
    timeRemaining.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }
  //the next line in case if we want to reset the time for alarm
  clearInterval(intervalId);
  // getting user's input value in number format
  let inputValue = Number(alarmSetInput.value);
  if (inputValue <= 0) {
    timeRemaining.innerText = "Enter a positive number.";
    alarmSetInput.value = "";
    return;
  }
  showTime(inputValue);
  intervalId = setInterval(countdown, 1000);

  function countdown() {
    if (inputValue > 0) {
      inputValue--;
      showTime(inputValue);
    }
    // When the inputValue is 0, play the alarm and clear interval so that the function stops initialising
    else {
      playAlarm();
      clearInterval(intervalId);
      alarmSetInput.value = "";
    }
  }
}
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    timeRemaining.innerText = `Time Remaining: 00:00`;
    alarmSetInput.value = "";
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
