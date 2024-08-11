let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('record');
let time = document.getElementById('time');
let recordArea = document.getElementById('recordData');

let timer;
let ms = 0;
let second =0;
let minutes = 0;
let hour =0;
let start = false;

function updateOnUi(){
    let msec = ms < 10 ? '00' + ms : ms < 100 ? '0'+ ms : ms;
    let s = second < 10 ? '0'+ second : second;
    let m = minutes <10 ? '0' + minutes : minutes;
    let h =  hour < 10 ? '0' + hour : hour;
    time.innerText = ` ${h} : ${m} : ${s} : ${msec} `;
    return` ${h} : ${m} : ${s} : ${msec} `;
}

function startTimer(){
    if(start===false){
        timer= setInterval(() => {
            ms+=10;
            if(ms ===1000){
                ms = 0;
                second++;
                if(second===60){
                    second = 0;
                    minutes++;
                    if(minutes==60){
                        minutes = 0;
                        hour++;
                    }
                }
            }
            updateOnUi();
        }, 10);
        start = true;
    }
};


function stopTimer(){
    clearInterval(timer);
    start = false;
}


function resetTimer() {
    stopTimer();
    hour = 0;
    minutes = 0;
    second = 0;
    ms = 0;
    updateOnUi();
}

function record(){
    let p = document.createElement('p');
    p.className = 'recTime';
    p.innerText =`*` + updateOnUi();
    recordArea.appendChild(p);
}

btn1.addEventListener('click',startTimer);
btn2.addEventListener('click',stopTimer);
btn3.addEventListener('click',resetTimer);
btn4.addEventListener('click',record);