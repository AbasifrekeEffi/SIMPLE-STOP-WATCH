const watch = document.querySelector('.watch')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let sec = 0;
let interval = null;

function stopwatch() {
    sec++;

    let hrs = Math.floor(sec/3600);
    let min = Math.floor((sec-(hrs*60))/60);
    let second = Math.floor(sec%60);

    if (hrs < 10) {hrs = '0' + hrs}
    if (min < 10) {min = '0' + min}
    if (second < 10) {second = '0' + second}

    watch.innerText = `${hrs}:${min}:${second}`
}

start.addEventListener('click', function(){
    if (interval) {
        return
    }
    interval = setInterval(stopwatch, 1000)
})

stop.addEventListener('click', function(){
     clearInterval(interval)
     interval = null
})

reset.addEventListener('click', function(){
    window.location.reload()
})