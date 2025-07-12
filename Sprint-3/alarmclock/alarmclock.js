  function setAlarm() {
  const inputArea = document.getElementById("alarmSet");
  const seconds = Number(inputArea.value);

  if (isNaN(seconds) || seconds <= 0) return;

  for (let i = 0; i <= seconds; i++) {
    setTimeout(() => {
      const countDown = document.getElementById("timeRemaining");
      const remaining = seconds - i;
      countDown.innerText = `Time Remaining: 00:${String(remaining).padStart(2, '0')}`;

      if (remaining === 0) {
        playAlarm(); 
      }
    }, i * 1000); 
  }
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
