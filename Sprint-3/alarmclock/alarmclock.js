function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let totalSeconds = Number(input.value);

  let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  let seconds = String(totalSeconds % 60).padStart(2, "0");

  heading.innerText = `Time Remaining: ${minutes}:${seconds}`;

  const timer = setInterval(() => {
    totalSeconds--;

    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    let seconds = String(totalSeconds % 60).padStart(2, "0");

    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      playAlarm();
    }

    console.log(totalSeconds);
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
