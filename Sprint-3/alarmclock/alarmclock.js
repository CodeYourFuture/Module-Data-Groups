var audio = new Audio("alarmsound.mp3");
var countDown;
let minutesVal;
let secVal;
function setAlarm() {
  if (countDown) {
    clearInterval(countDown);
  }
  var textareaVal = document.getElementById("alarmSet").value;
  if(textareaVal>0 && textareaVal<=60){
    minutesVal = 0;
    secVal = parseInt(textareaVal);
  }
  else if(textareaVal>60){
    minutesVal = Math.floor(textareaVal/60);
    secVal = parseInt(textareaVal%60);

  }
  else if (
    isNaN(minutesVal) ||
    isNaN(secVal) ||
    minutesVal > 59 ||
    minutesVal < 0 ||
    secVal > 59 ||
    secVal < 0
  ) {
    //document.getElementById("timeRemaining").innerHTML ="Input Invalid: Provide a string in MM:SS where MM and SS are numbers";
    alert("Input Invalid: Provide a Whole Number OR Provide a string in MM:SS where MM and SS are numbers");
    return;
  }
  else  {
    let separatedValues = textareaVal.split(":");
    minutesVal = parseInt(separatedValues[0]);
    secVal = parseInt(separatedValues[1]);
  }
  
  countDown = setInterval(function () {
    if (minutesVal !== 0) {
      if (secVal !== 0) {
        secVal--;
        if (secVal === 0) {
          minutesVal = minutesVal - 1;
          secVal = 59;
        }
      }
    } else if (minutesVal === 0) {
      if (secVal !== 0) {
        secVal--;
      } else if (secVal === 0) {
        clearInterval(countDown);
        document.body.style.backgroundColor = "red";
        playAlarm();
      }
    }
    document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${String(minutesVal).padStart(2,"0")} : ${String(secVal).padStart(2, "0")}`;

      }, 1000);
}

//Implement
//User enter a number | clicked set alarm button  | Time Remaining ->updated to mm:ss
//Alarm set with valid time | When one second passes time - remaining title should decrease by 1 second.
//when time reaches time of 00.00 alarm sound  should play continiously.
//Given the sound is playing when user click stop playing alarm sound stop playing.
//when it reaches 00.00 the background color change
//when loading for 1st time should show 00:00 and no alarm sound should should play.
// DO NOT EDIT BELOW HERE

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

window.onload = setup;
