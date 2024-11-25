function setAlarm() {
    let inputValue = parseInt(document.getElementById("alarmSet").value, 10);
    let tenSecond = inputValue;
    if (inputValue < 0 || isNaN(inputValue)) {
        alert("Invalid value");
        return;
    }

    let intervalId = setInterval(function() {
    	
        if (inputValue >= 0) {
        	
            let minutes = Math.floor(inputValue / 60).toString().padStart(2, '0');
            let seconds = (inputValue % 60).toString().padStart(2, '0');
            document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${minutes}:${seconds}`;
            inputValue--;

            if (inputValue < 0) {
            	if(tenSecond === 10){
        			document.body.style.backgroundColor = 'lightblue'; // You can use any valid CSS color

            	}
                playAlarm();
                clearInterval(intervalId);
            }
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