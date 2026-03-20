function setAlarm() {
  const input = document.getElementById('alarmSet');
  const heading = document.getElementById('timeRemaining');
  let totalSeconds = parseInt(input.value) || 0;
  
  function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    heading.innerText = `Time Remaining: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      playAlarm();
      clearInterval(intervalId);  // Stop interval after alarm
    }
  }
  
  updateDisplay();  // Set initial time
  const intervalId = setInterval(updateDisplay, 1000);
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
