let countdownInterval
let alarmTimeout;

function setAlarm() {
  const secondsInput = document.getElementById("alarmSet").value;
  const totalSeconds = parseInt(secondsInput, 10);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

 // Clear any existing countdown
  clearInterval(countdownInterval);
  clearTimeout(alarmTimeout);

  const alarmDuration = totalSeconds * 1000; 
  const endTime = Date.now() + alarmDuration;

  // set alarm
  alarmTimeout = setTimeout(() => {
    playAlarm();
  }, alarmDuration);

  // Update countdown 
    const updateCountdown = () => {
      const timeLeft = endTime - Date.now();

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
      return;
    }
    
    const minutes = Math.floor((timeLeft / 1000) / 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("timeRemaining").innerText = 
      `Time Remaining: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  
  //start countdown
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
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

