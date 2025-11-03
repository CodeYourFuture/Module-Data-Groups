function setAlarm() {
  const alarmSet = document.getElementById("alarmSet").value;
  const timeRemaining = document.getElementById("timeRemaining");

  let totalSeconds = parseInt(alarmSet);

  let countdown = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timeRemaining.textContent = `Time Remaining: ${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      playAlarm();
      let flash = setInterval(() => {
        document.body.style.backgroundColor =
          document.body.style.backgroundColor === "red" ? "white" : "red";
      }, 500);
      setTimeout(() => {
        clearInterval(flash);
        document.body.style.backgroundColor = "white";
      }, 5000);
    }

    totalSeconds--;
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
