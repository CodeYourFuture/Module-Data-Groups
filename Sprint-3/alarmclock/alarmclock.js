function setAlarm() {
  const inputValue = document.getElementById("alarmSet");
  let secondsLeft = parseInt(inputValue.value);

  if (isNaN(secondsLeft) || secondsLeft <= 0) {
    alert("Please enter a valid number.");
    return;
  }

  const heading = document.getElementById("timeRemaining");

  function updateHeading() {
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    heading.textContent = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  updateHeading();

  const countdown = setInterval(() => {
    secondsLeft--;

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      playAlarm();

      console.log("Time's up!");
    }

    updateHeading();
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
