

var min = 0; 
var sec = 0; 
var ms = 0;
var minheading = document.getElementById("min"); 
var secheading = document.getElementById("sec"); 
var msheading = document.getElementById("ms");
var interval;


function timer(){
    ms++
    msheading.innerHTML = ms;
    if (ms >= 100 ){
        sec++
        secheading.innerHTML = sec;
        ms = 0;
    }else if (sec >= 60){
        min++
        minheading.innerHTML = min
        sec = 0
      
    }
}

function start(){
    interval = setInterval(timer, 10)
}

function stop(){
    clearInterval(interval)

}


function reset(){
   
    min = 0;
    sec = 0;
    ms = 0;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msheading.innerHTML = ms;
    stop()
}












