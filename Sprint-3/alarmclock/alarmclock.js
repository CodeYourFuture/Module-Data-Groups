let countDown;
let remainingTime = 0;

function setAlarm() {
  remainingTime = parseInt(document.getElementById('alarmSet').value, 10);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert('Please enter a valid number');
    return;
  }
  else {
    changeDisplay(remainingTime);
    clearInterval(countDown);

    countDown = setInterval(() => {
      remainingTime--;

      changeDisplay(remainingTime);

      if(remainingTime <= 0) {
        clearInterval(countDown);
        playAlarm();
      }
    }, 1000);
  }

}

const changeDisplay = (seconds) => {
  const time = document.getElementById('time');

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  time.textContent = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
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
