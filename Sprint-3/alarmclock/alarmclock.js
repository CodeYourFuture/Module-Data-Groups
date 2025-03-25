function setAlarm() {
  const initialTime = parseInt(document.getElementById("alarmSet").value);
  
  if (isNaN(initialTime) || initialTime <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  let countdownInterval;
  let remainingTime = initialTime;

  function updateClock() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("timeRemaining").textContent = `Time Remaining: ${getClockDigit(minutes)}:${getClockDigit(seconds)}`;

    if (remainingTime > 0) {
      remainingTime--;
    } else {
      playAlarm();
      clearInterval(countdownInterval);
    }
  }

  updateClock();
  countdownInterval = setInterval(updateClock, 1000);
}

function getClockDigit(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
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
