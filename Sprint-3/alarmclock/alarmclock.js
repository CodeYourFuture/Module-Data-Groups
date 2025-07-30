let intervalId;
function setAlarm() {
  if (intervalId) clearInterval(intervalId);
  let input = Number(document.getElementById("alarmSet").value);
  intervalId = setInterval(() => {
    const minutes = String(Math.floor(input / 60)).padStart(2, "0");
    const seconds = String(input % 60).padStart(2, "0");
    document.getElementById(
      "timeRemaining"
    ).textContent = `Time Remaining: ${minutes}:${seconds}`;
    if (input <= 0) {
      clearInterval(intervalId);
      playAlarm();
      return;
    }
    input--;
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
