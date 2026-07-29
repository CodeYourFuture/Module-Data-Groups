function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let remainingSeconds = Number(input.value);

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    return `${mm}:${ss}`;
  }

  heading.innerText = `Time Remaining: ${formatTime(remainingSeconds)}`;

  const intervalId = setInterval(() => {
    remainingSeconds -= 1;

    if (remainingSeconds > 0) {
      heading.innerText = `Time Remaining: ${formatTime(remainingSeconds)}`;
    } else {
      heading.innerText = "Time Remaining: 00:00";
      clearInterval(intervalId);
      playAlarm();
      document.body.classList.add("flash");
    }
  }, 1000);
}

function stopFlashingBackground() {
  document.body.classList.remove("flash");
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
