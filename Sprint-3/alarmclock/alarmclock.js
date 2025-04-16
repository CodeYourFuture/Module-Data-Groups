let timerInterval = null; 

function setAlarm() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  const input = document.getElementById("alarmSet").value; 
  const heading = document.getElementById("timeRemaining");
  let time = parseInt(input);

  const updateCountdown = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      playAlarm(); 
    } else {
      time--;
    }
  };

  updateCountdown(); 
  timerInterval = setInterval(updateCountdown, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerInterval); 
    pauseAlarm();
    heading.innerText = "Time Remaining: 00:00"; 
  });
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
