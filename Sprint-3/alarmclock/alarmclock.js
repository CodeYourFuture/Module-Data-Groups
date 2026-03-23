function setAlarm() {
  const time = document.getElementById("alarmSet").value;
  const heading = document.getElementById("timeRemaining");

  let remainingTime = Number(time);

  const timer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      heading.textContent = "Time Remaining: 00:00";
      playAlarm();
      return;
    }

    remainingTime--;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    heading.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);

  
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  heading.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
