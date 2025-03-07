function setAlarm() {
  var textareaVal = document.getElementById("alarmSet").value;
  let separatedValues =  textareaVal.split(':');
  let minutesVal = parseInt(separatedValues[0]);
  let secVal = parseInt(separatedValues[1]);
  //document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${minutesVal} : ${secVal}`;
  if (isNaN(minutesVal) || isNaN(secVal) || minutesVal > 59 || minutesVal < 0 || secVal > 59 || secVal < 0 ) {
    document.getElementById("timeRemaining").innerHTML ="Input Invalid: Provide a string in MM:SS where MM and SS are numbers";
    return;
  }
  var countDown = setInterval(function () {
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
      document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${String(minutesVal).padStart(2,"0")} : ${String(secVal).padStart(2,"0")}`;
    }, 1000);
  }
  

/*if (secVal !== 0) {
      if (minutesVal !== 0) {
        secVal--;
        if (secVal === 0) {
          minutesVal = minutesVal - 1;
          secVal = secVal + 60;
          secVal--;
        }
        if (minutesVal === 0 && secVal === 0) {
          playAlarm();
        }
      }
    }
    else if(secVal !== 0){
      if(minutesVal === 0){
        secVal--;
        if(secVal === 0){
          playAlarm();
        }
      }
    } */
/*    else if (minutesVal !==0 && secVal !== 0){
      if(minutesVal !== 0 & secVal === 0 ){
        minutesVal=minutesVal-1;
        secVal = secVal + 60;
        for(let i = 0; i < 60; i++ )
        {
          secVal--;
        }
      }
      else if(minutesVal !== 0 & secVal !== 0){
        for(let i = 0; i < secVal ;i++){
          secVal--;
          if(secVal===0){
            minutesVal = minutesVal - 1;
            secVal = secVal + 60 ;
            for(let i = 0; i < secVal ;i++){
          secVal--;
        }
        minutesVal = minutesVal - 1 ;
          }
      }
    }
    else if (minutesVal === 0 & secVal === 0){
      playAlarm();
    }
    }
  } */

/*

function (){
    if (minutesVal > 60 || minutesVal < 1){
      clearInterval(countDown); //this means stop the countdown function
      document.getElementById(
        "timeRemaining"
      ).innerHTML = "The Time is invalid provide time mm:ss format";
    }
    else{
      minutesVal--;
      document.getElementById(
        "timeRemaining"
      ).innerHTML = `Time Remaining: ${minutesVal} : ${secVal}`;
      
    }

  }


*/
//Implement
//User enter a number | clicked set alarm button  | Time Remaining ->updated to mm:ss
//Alarm set with valid time | When one second passes time - remaining title should decrease by 1 second.
//when time reaches time of 00.00 alarm sound  should play continiously.
//Given the sound is playing when user click stop playing alarm sound stop playing.
//when it reaches 00.00 the background color change
//when loading for 1st time should show 00:00 and no alarm sound should should play.
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
