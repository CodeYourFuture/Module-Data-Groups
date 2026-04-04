function setAlarm() {
  const inputSeconds = document.getElementById("alarmSet");
  const displayTimer = document.getElementById("timeRemaining")

  let remainingSeconds = Number(inputSeconds.value);
  
  const countDownInterval = setInterval(() => {
    if (remainingSeconds < 0) {
      clearInterval(countDownInterval);
      playAlarm();
      inputSeconds.value = '';
      document.body.style.backgroundColor = 'lightgreen';
      return
    }

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    displayTimer.innerHTML = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    remainingSeconds -= 1;
  }, 1000);

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
