var audio = new Audio("alarmsound.wav");

let countdownInterval = null;
let remainingSeconds = 0;

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(remainingSeconds)}`;
}

function setAlarm() {
  clearInterval(countdownInterval);
  pauseAlarm();

  const input = document.getElementById("alarmSet");
  remainingSeconds = Number(input.value);

  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    alert("Please enter a positive number");
    return;
  }

  updateDisplay();

  countdownInterval = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      playAlarm();
      flashBackground();
    }
  }, 1000);
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  clearInterval(countdownInterval);      
  audio.pause();                         
  audio.currentTime = 0;                 
  document.getElementById("timeRemaining").textContent = `Time Remaining: 00:00`; 

}
function flashBackground() {
  let body = document.body;
  let count = 0;
  let flashing = setInterval(() => {
    body.style.backgroundColor = count % 2 === 0 ? "#F5B027" : "#412f25";
    count++;
    if (count > 10) {
      clearInterval(flashing);
      body.style.backgroundColor = ""; 
    }
  }, 300);
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

window.onload = setup;
