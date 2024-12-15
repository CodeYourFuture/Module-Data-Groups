function setAlarm() {
  let countdown;
  clearInterval(countdown);
  document.body.style.backgroundColor = "";
  const timeInput = parseInt(document.getElementById("alarmSet").value);

  if (isNaN(timeInput) || timeInput <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  let timeRemaining = timeInput;
  if (timeRemaining === 10) 
    triggerSpecialAlarm(); 
  updateTimeDisplay(timeRemaining);
  countdown = setInterval(() => {
    timeRemaining--;
    if (timeRemaining <= 0) {
      clearInterval(countdown);
      updateTimeDisplay(0);
      playAlarm(); 
    } else {
      updateTimeDisplay(timeRemaining);
    }
  }, 1000);
}

function updateTimeDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  document.getElementById("timeRemaining").textContent = 
    `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(secondsLeft).padStart(2, "0")}`;
}

function triggerSpecialAlarm() {
  document.body.style.backgroundColor = "yellow";
  playAlarm();
}


//No need to edit below

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
