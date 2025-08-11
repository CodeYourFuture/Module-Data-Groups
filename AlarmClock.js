function setAlarm() {
    const input = document.getElementById("alarmSet").value;
    let timeRemaining = parseInt(input, 10);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    const display = document.getElementById("timeRemaining");
    const interval = setInterval(() => {
        if (timeRemaining > 0) {
            display.textContent = `Time Remaining: ${timeRemaining--} seconds`;
        } else {
            clearInterval(interval);
            display.textContent = "Time Remaining: 0 seconds";
            playAlarm();
        }
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