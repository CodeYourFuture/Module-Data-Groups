
  const input = document.querySelector('#alarmSet');
  const heading = document.querySelector('#timeRemaining');
  let intervalId;
  
  // Set default input value to prevent NaN issue
  input.value = input.value || 10;

  function updateDisplay(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    heading.innerText = `Time Remaining: ${minutes}:${seconds}`;
  }

  function startTimer() {
    clearInterval(intervalId);
    let timeRemaining = parseInt(input.value);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }

    updateDisplay(timeRemaining);

    intervalId = setInterval(() => {
      if (timeRemaining <= 1) { // Adjusted to 1 to avoid delay
        clearInterval(intervalId);
        updateDisplay(0); // Show 00:00 immediately
        playAlarm();
      } else {
        timeRemaining--;
        updateDisplay(timeRemaining);
      }
    }, 1000);
  }
  var audio = new Audio("alarmsound.mp3");

  




function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  audio.currentTime = 0; 
}

window.addEventListener("load", () => {
  document.querySelector('#set').addEventListener('click', startTimer);
  document.querySelector('#stop').addEventListener('click', pauseAlarm);
  

  updateDisplay(0);
});



// DO NOT EDIT BELOW Here
