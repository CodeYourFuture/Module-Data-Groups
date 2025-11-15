let countdownInterval

function setAlarm() {
  const alarmTime = document.getElementById("alarmSet").value;
  if (!alarmTime) {
    alert("Please select a time for the alarm.");
    return;
  }
  const alarmDate = new Date(alarmTime);
  const now = new Date();

  const timeToAlarm = alarmDate.getTime() - now.getTime();
  if (isNaN(timeToAlarm)) {
    alert("Invalid date format. Please select a valid date and time.");
    return;
  } else if (timeToAlarm <= 0) {
    alert("Please select a future time for the alarm.");
    return;
  } 
  clearInterval(countdownInterval);
    setTimeout(() => {
      playAlarm();
    }, timeToAlarm);
    alert("Alarm set for " + alarmDate.toString());
  

  const updateCountdown = () => {
    const now = new Date();
    const timeRemaining = alarmDate.getTime() - now.getTime();

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
      return;
    }

    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timeRemaining").innerText =
      "Time Remaining: " +
      String(minutes).padStart(2, '0') +
      ":" +
      String(seconds).padStart(2, '0');
  };  
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
};


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

