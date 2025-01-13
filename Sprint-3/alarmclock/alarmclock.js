function setAlarm() {
  clearInterval();
  //let timeRemaining = 0;

  let inputTime = parseInt(document.getElementById("alarmSet").value);
    if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter a valid time");
      return;
    }

    timeRemaining = inputTime;

  function formatTime(seconds) {  //format time (MM : SS)
    const minutes = Math.floor(seconds / 60); //minutes
    const remainingSeconds = seconds % 60; // remaining seconds
    return `Time Remaining: ${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  document.getElementById("timeRemaining").textContent = formatTime(timeRemaining);

  ///counter for the clock
  let countdown = setInterval(function() {
    if (timeRemaining <= 0) {
      //when the countdown is equal zero, play the alarm and stop the timer
      playAlarm();
      clearInterval(countdown); // Stop the countdown timer
    } else {
      //decrease the remaining time by one second
      timeRemaining--;

      //Update the heading to reflect the new remaining time in MM:SS format
      document.getElementById("timeRemaining").textContent = formatTime(timeRemaining);
    }
  }, 1000);    // 1000 = 1 second > check every one second

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
