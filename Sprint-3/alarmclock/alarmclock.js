var audio = new Audio("alarmsound.wav");

let countdownTimeout = null;
let flashingInterval = null;
let remainingSeconds = 0;

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formatTime(remainingSeconds)}`;
}

function setAlarm() {
  clearTimeout(countdownTimeout);
  pauseAlarm();

  const input = document.getElementById("alarmSet");
  remainingSeconds = Number(input.value);

  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    alert("Please enter a positive number");
    return;
  }

  updateDisplay();

      function tick() {
        remainingSeconds--;
        updateDisplay();

        if (remainingSeconds <= 0) {
          playAlarm();
          flashBackground();
          return;
        }

        countdownTimeout = setTimeout(tick, 1000); // next tick
      }

      countdownTimeout = setTimeout(tick, 1000); // first tick
    }

function playAlarm() {
  audio.loop = true;
  audio.play();
}

function pauseAlarm() {
  clearTimeout(countdownTimeout);   
  countdownTimeout = null;

  audio.pause();  
  audio.loop = false;                       
  audio.currentTime = 0;                 
  document.getElementById("timeRemaining").textContent = `Time Remaining: 00:00`; 

if (flashingInterval) {
        clearInterval(flashingInterval);
        flashingInterval = null;
        document.body.style.backgroundColor = ""; 
      }
    }
function flashBackground() {
  let body = document.body;
  let count = 0;
  let flashing = setInterval(() => {
    body.style.backgroundColor = count % 2 === 0 ? "#F5B027" : "#412f25";
    count++;
    if (count > 10) {
      clearInterval(flashing);
      flashingInterval = null;
      body.style.backgroundColor = ""; 
    }
  }, 300);
}

function setup() {
  document.getElementById("set").addEventListener("click", setAlarm);
  document.getElementById("stop").addEventListener("click", pauseAlarm);
  document.getElementById("alarmSet").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          setAlarm();
        }
      });
}

window.onload = setup;
