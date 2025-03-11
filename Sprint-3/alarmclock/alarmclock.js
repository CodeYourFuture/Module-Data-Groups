function setAlarm() {}
  let timeRemaining = document.querySelector("#timeRemaining")
  let setButton = document.querySelector("#set")
  let stopButton = document.querySelector("#stop")
  let alarmTime = document.querySelector("#alarmSet")

  //let totalMinutes = alarmTime.value/60
  //let totalSeconds = alarmTime.value % 60
  
  function playAlarm() {
    audio.play();
  }

  function pauseAlarm() {
    audio.pause();
  }

  setButton.addEventListener("click", function startTimer(){

    let totalMinutes = Math.floor(alarmTime.value/60)
    let totalSeconds = alarmTime.value % 60

    //clearInterval(countdown)
    countdown= setInterval(function(){
      timeRemaining.innerText = `Time Remaining: ${totalMinutes < 10 ?'0':''} ${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`
      totalSeconds-- 

      if (totalSeconds < 0 && totalMinutes > 0){
        totalMinutes--
        totalSeconds = 59
      }
      if(totalSeconds < 0 && totalMinutes === 0){
        clearInterval(countdown)
        playAlarm()
      }
    }, 1000)
    
   
  })
  stopButton.addEventListener("click", function stopTimer(){
    clearInterval(countdown)
    pauseAlarm()
  })


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
