function setAlarm() {
  // get the value from input and show it in the h1
  let input = document.getElementById("alarmSet").value;
  let time = Number(input);

  document.getElementById(
    "timeRemaining"
  ).textContent = `Time Remaining: 00:${time.toString().padStart(2, "0")}`;
  document.title = `Time Remaining: 00:${time.toString().padStart(2, "0")}`;

  // start the countdown
  const interval = setInterval(() => {
    //decress the numnber
    time--;

    //update the h1
    document.getElementById(
      "timeRemaining"
    ).textContent = `Time Remaining: 00:${time.toString().padStart(2, "0")}`;
    document.title = `Time Remaining: 00:${time.toString().padStart(2, "0")}`;

    //make sure just countdown to 0
    if (time <= 0) {
      clearInterval(interval);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW.# HERE

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
