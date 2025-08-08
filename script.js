let watch = document.querySelector(".watch")
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

start.addEventListener("click",function(){
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer,10);
});

stop.addEventListener("click",function(){
    clearInterval(timerId);
});

reset.addEventListener("click",function(){
    clearInterval(timerId);
    watch.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }

     let msecString = msec < 10 ? `0${msec}` : msec;
     let secsString = secs < 10 ? `0${secs}` : secs;
     let minsString = mins < 10 ? `0${mins}` : mins;

     watch.innerHTML = `${msecString} : ${secsString} : ${minsString}`

    
}
