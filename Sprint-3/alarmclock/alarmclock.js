function setAlarm() {
  const seconds = parseInt(document.getElementById("alarmSet").value, 10);
  let remaining = seconds;

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  document.getElementById("timeRemaining").innerText = `Time Remaining: ${formatTime(remaining)}`;

  const timer = setInterval(() => {
    remaining--;
    document.getElementById("timeRemaining").innerText = `Time Remaining: ${formatTime(remaining)}`;
    if (remaining <= 0) {
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
