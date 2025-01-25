

function setAlarm() {
  var inputTime = parseInt(document.getElementById("alarmSet").value);//to have the integer input
  var countdown = inputTime;

  if (isNaN(countdown) || countdown <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  document.getElementById("timeRemaining").innerText = `Time Remaining: ${formatTime(countdown)}`;

  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  

  var interval = setInterval(() => {// I will have a function that runs at an interval
    countdown--;
    document.getElementById("timeRemaining").innerText = `Time Remaining: ${formatTime(countdown)}`;

    if (countdown === 0) {
      clearInterval(interval);
      playAlarm();
      // Optionally change background color
      //document.body.style.backgroundColor = "red";
      document.body.style.background = "linear-gradient(yellow, red)";


    }
  }, 1000);
}


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
