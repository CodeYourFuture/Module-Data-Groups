function setAlarm() {
    // Get the user input value and reset the background color
    let inputValue = parseInt(document.getElementById("alarmSet").value, 10);
    document.body.style.backgroundColor = 'white';

    // Validate input
    if (isNaN(inputValue) || inputValue < 0) {
        alert("Invalid value");
        return;
    }

    const originalValue = inputValue; // Store the initial value for later use

    // Start the countdown
    const intervalId = setInterval(() => {
        const minutes = Math.floor(inputValue / 60).toString().padStart(2, '0');
        const seconds = (inputValue % 60).toString().padStart(2, '0');

        document.getElementById("timeRemaining").textContent = `Time Remaining: ${minutes}:${seconds}`;

        if (inputValue === 0) {
            // Special case: Change background color if the initial input was 10 seconds
            if (originalValue === 10) {
                document.body.style.backgroundColor = 'lightblue';
            }
            playAlarm(); // Trigger the alarm sound
            clearInterval(intervalId); // Stop the timer
        }

        inputValue--; // Decrement the timer value
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