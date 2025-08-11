function setAlarm() {
  const ONE_SECOND_MS = 1000;
  const input = document.getElementById("alarmSet").value;
  const initialTime = Number(input);

  if (
    isNaN(initialTime) ||
    initialTime <= 0 ||
    !Number.isInteger(initialTime)
  ) {
    alert("Please enter a valid time");
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
  countdownInterval = setInterval(updateClock, ONE_SECOND_MS);
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
