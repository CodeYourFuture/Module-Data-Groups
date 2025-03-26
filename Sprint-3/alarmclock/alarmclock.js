function setAlarm() {
  const inputValue = document.getElementById("alarmSet");
  let secondsLeft = parseInt(inputValue.value);

  if (isNaN(secondsLeft) || secondsLeft <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  updateHeading(secondsLeft);

  const countdown = setInterval(() => {
    secondsLeft--;

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      playAlarm();

      console.log("Time's up!");
    }

    updateHeading(secondsLeft);
  }, 1000);
}

function updateHeading(secondsLeft) {
  const heading = document.getElementById("timeRemaining");
  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  heading.textContent = `Time Remaining: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
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
