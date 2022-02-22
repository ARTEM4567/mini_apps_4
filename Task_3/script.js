let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let hoursVar = new Date().getHours();
hours.innerText = `${new Date().getHours()}:`;
let minVar = new Date().getMinutes();
minutes.innerText = `${new Date().getMinutes()}:`;
let secVar = new Date().getSeconds();
seconds.innerText = new Date().getSeconds();

setInterval(() => {
    secVar = secVar + 1;
    if(secVar > 59){
        secVar = 0;
        minVar = minVar + 1;
    }
    if(minVar > 59){
        minVar = 0;
        hoursVar = hoursVar + 1;
    }
    if(hoursVar > 23){
        hoursVar = 0;
    }
    if(secVar < 10){
        seconds.innerText = `0${secVar}`;
    } else{
        seconds.innerText = secVar;
    }
    if(minVar < 10){
        minutes.innerText = `0${minVar}:`;
    } else{
        minutes.innerText = `${minVar}:`;
    }
    if(hoursVar < 10){
        hours.innerText = `0${hoursVar}:`;
    } else{
        hours.innerText = `${hoursVar}:`;
    }
    
    
}, 1000)