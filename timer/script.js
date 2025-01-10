let timerView = document.body.querySelector(".timer-text");
let inputField = document.body.querySelector(".count");
let timerRange = 0;
let startButton = document.body.querySelector(".start-button");
let timerValue = 0;
timerView.innerText = timerValue; 

startButton.addEventListener("click", () => {
   timerRange = +(inputField.value);
   initiateTimer();
   setTimeout(function(){console.log("done")}, 1000);
});
function initiateTimer() {
   let timer = setInterval(function(){
      timerValue += 10;
      timerView.innerText = timerValue;
      if (timerValue === timerRange) {
         clearInterval(timer);
      }
   }, 10);
}
