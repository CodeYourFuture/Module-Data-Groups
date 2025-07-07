function setAlarm() {
   // 〰️ Get the value from the input field and parse it as an integer
  const alarmTime = parseInt(document.getElementById("alarmSet").value, 10);
  
  // 〰️ If the input value is invalid (NaN) or less than or equal to zero, show an error message
  if (isNaN(alarmTime) || alarmTime <= 0) {
    alert("Please enter a valid time greater than 0.");
    return;
  }

  // 〰️ Set the initial time remaining to the input value
  let timeRemaining = alarmTime;

  // 〰️ Function to format time in MM:SS format
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // 〰️ Get the minutes
    const remainingSeconds = seconds % 60; // 〰️ Get the remaining seconds
    return `Time Remaining: ${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  // 〰️ Update the heading to reflect the remaining time in MM:SS format
  document.getElementById("timeRemaining").textContent = formatTime(timeRemaining);

  // 〰️ Start a countdown timer that updates every second
  const countdown = setInterval(function() {
    if (timeRemaining <= 0) {
      // 〰️ When the countdown reaches zero, play the alarm sound and stop the timer
      playAlarm();
      clearInterval(countdown); // 〰️ Stop the countdown timer
    } else {
      // 〰️ Decrease the remaining time by one second
      timeRemaining--;

      // 〰️ Update the heading to reflect the new remaining time in MM:SS format
      document.getElementById("timeRemaining").textContent = formatTime(timeRemaining);
    }
  }, 1000); // 〰️ Run this every 1000 milliseconds (1 second)
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
