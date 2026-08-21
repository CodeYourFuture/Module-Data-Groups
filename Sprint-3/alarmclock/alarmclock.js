function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let timeRemaining = Number(input.value);

  function updateHeading() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    heading.innerText =
      `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
  }
  updateHeading();
  // If the alarm is set to 00:00
  if (timeRemaining === 0) {
    playAlarm();
    return;
  }
  
  const timer = setInterval(() => {
    timeRemaining--;
    updateHeading();
    // When the countdown reaches zero
    if (timeRemaining === 0) {
      clearInterval(timer);
      playAlarm();
      document.body.style.backgroundColor = "lightcoral";
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
