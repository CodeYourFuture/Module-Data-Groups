function setAlarm() {
  const alarmTimeInput = document.getElementById("alarmSet");
  const alarmTimeInSeconds = alarmTimeInput.value;
  let totalSeconds = parseInt(alarmTimeInSeconds);
  
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid number of seconds for the alarm.");
    document.getElementById("alarmSet").value = "";
    return;
  }

  updateTimeRemaining(totalSeconds);

  let countdown = setInterval(() => {
    totalSeconds--;
    updateTimeRemaining(totalSeconds);
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
  }, 1000); 
}

function updateTimeRemaining(totalSeconds) {
  const timeRemaining = document.getElementById("timeRemaining");
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let minuteStr = padNumber(minutes);
  let secondStr = padNumber(seconds);
  let displayTime = "Time Remaining: " + minuteStr + ":" + secondStr;
  timeRemaining.textContent = displayTime;
}

function padNumber(num) {
  return String(num).padStart(2, "0");
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
