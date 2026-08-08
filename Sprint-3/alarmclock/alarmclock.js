function setAlarm() {
  let seconds = parseInt(document.getElementById("alarmSet").value, 10);
  const heading = document.getElementById("timeRemaining");

  function formatTime(s) {
    const mins = String(Math.floor(s / 60)).padStart(2, "0");
    const secs = String(s % 60).padStart(2, "0");
    return `Time Remaining: ${mins}:${secs}`;
  }

  heading.innerText = formatTime(seconds);

  const timer = setInterval(() => {
    seconds--;
    heading.innerText = formatTime(seconds);
    if (seconds <= 0) {
      clearInterval(timer);
      playAlarm();
    }
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
