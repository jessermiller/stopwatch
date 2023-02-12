const timeCount = document.querySelector('.timer .time-track');
const strtButt = document.getElementById('start');
const stopButt = document.getElementById("stop");
const restrtButt = document.getElementById('restart');

let count = 0;
let interval = null;

strtButt.addEventListener('click', start);
stopButt.addEventListener('click', stop);
restrtButt.addEventListener('click', restart);

function timer(){
    count++;

    let hours = Math.floor(count / 36000);
    let minutes = Math.floor((count - (hours * 3600)) / 60);
    let seconds = count % 60;
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    timeCount.innerText = `${hours}. ${minutes}. ${seconds}`;
}

function start () {
    if (interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
   interval = null;
    
}

function restart () {
    stop();
    seconds = 0;
    timeCount.innerText = '00.00.00';
}