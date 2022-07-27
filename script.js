let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let stopAllBtn = document.querySelector('.stopAll')

startBtn.addEventListener('click', function(e) {
     e.preventDefault();
     setTimeout("clock()", 1000);
})

stopBtn.addEventListener('click', function(e) {
     e.preventDefault();
     document.querySelector('.time').innerHTML = "00:00";
     clearTimeout(clock());
})

function clock() {
     let timer = new Date();
     let minute = timer.getMinutes();
     let second = timer.getSeconds();

     if(minute < 10) {
          minute = "0" + minute;
     }
     if(second < 10) {
          second = "0" + second;
     }

     document.querySelector('.time').innerHTML = minute + ":" + second
}