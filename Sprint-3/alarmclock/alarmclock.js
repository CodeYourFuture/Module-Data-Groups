const setAlarmbtn = document.getElementById('set')
const inputAlarm = document.getElementById('alarmSet')
const remainingTime = document.getElementById('timeRemaining')
const stpButton = document.getElementById('stop')
let totalSecondsRemaining;
let countDown;

function updateTitleAndDisplay() {
    const minutes = Math.floor(totalSecondsRemaining / 60);
    const seconds = totalSecondsRemaining % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    document.title = `${formattedMinutes}:${formattedSeconds} - Alarm`;
    remainingTime.innerText = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
    totalSecondsRemaining--;

    if (totalSecondsRemaining < 0) {
        clearInterval(countDown); 
        document.title = "Time's Up!"; 
        remainingTime.innerText = "Time's Up!";
        playAlarm()
    }
    if(totalSecondsRemaining < 3){
      remainingTime.style.color = 'red'
    } else {
      remainingTime.style.color = ''
    }
}

setAlarmbtn.addEventListener('click', () => {
    if (countDown) {
        clearInterval(countDown)
        audio.pause()
        audio.currentTime=0
    }

    const inputSeconds = parseInt(inputAlarm.value, 10);

    if (isNaN(inputSeconds) || inputSeconds < 0) {
        remainingTime.innerText = "Invalid input. Please enter a non-negative number of seconds.";
        document.title = "Alarm Setter"; 
        return;
    }

    totalSecondsRemaining = inputSeconds;
    updateTitleAndDisplay();

    countDown = setInterval(updateTitleAndDisplay, 1000);
});

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
