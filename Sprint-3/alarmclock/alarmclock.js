let isAlarmSet = false;

function setAlarm() {
    if (isAlarmSet) return;

    // Get and validate user input
    const inputValue = parseInt(document.getElementById("alarmSet").value, 10);
    if (isNaN(inputValue) || inputValue < 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    document.body.style.backgroundColor = 'white'; // Reset background
    isAlarmSet = true; // Prevent multiple alarms

    const originalValue = inputValue; // Store the initial value for reference
    let remainingTime = inputValue; // Current countdown time

    // Start the countdown
    const intervalId = setInterval(() => {
        // Calculate and display remaining time
        const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
        const seconds = (remainingTime % 60).toString().padStart(2, '0');
        document.getElementById("timeRemaining").textContent = `Time Remaining: ${minutes}:${seconds}`;

        if (remainingTime === 0) {
            clearInterval(intervalId); // Stop the timer
            isAlarmSet = false; // Reset the lock

            // Change background color if the initial input was 10 seconds
            if (originalValue === 10) {
                document.body.style.backgroundColor = 'lightblue';
            }

            playAlarm(); // Trigger the alarm sound
        }

        remainingTime--; // Decrement time
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
