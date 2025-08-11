var audio = new Audio("alarmsound.mp3"); // Sound file for the alarm
let interval; // Variable to store the countdown timer

// Function to set the alarm
function setAlarm() {
    const input = document.getElementById("alarmSet").value; // Get user input
    let timeRemaining = parseInt(input); // Convert input to an integer

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Please enter a valid number!"); // Validate input
        return;
    }

    const timeDisplay = document.getElementById("timeRemaining"); // Display remaining time
    timeDisplay.innerText = `Time Remaining: ${String(Math.floor(timeRemaining / 60)).padStart(2, "0")}:${String(timeRemaining % 60).padStart(2, "0")}`;

    interval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(interval); // Stop the timer
            playAlarm(); // Play the alarm sound
            timeDisplay.innerText = "Time Remaining: 00:00";
        } else {
            timeRemaining -= 1; // Decrease time by one second
            const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
            const seconds = String(timeRemaining % 60).padStart(2, "0");
            timeDisplay.innerText = `Time Remaining: ${minutes}:${seconds}`;
        }
    }, 1000); // Run every second
}

// Function to play the alarm sound
function playAlarm() {
    audio.play();
}

// Function to pause the alarm sound
function pauseAlarm() {
    audio.pause(); // Stop the sound
    clearInterval(interval); // Stop the timer
}

// Function to set up event listeners
function setup() {
    document.getElementById("set").addEventListener("click", setAlarm); // Set alarm button
    document.getElementById("stop").addEventListener("click", pauseAlarm); // Stop alarm button
}

// Initialize the setup when the page loads
window.onload = setup;