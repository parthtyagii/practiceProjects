const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
const timer = document.querySelector("#timer");

let valMS = 0;
let valS = 0;
let sec = "00";
let miliSec = "00";
let flag = false;
let intervalId;

const startTimer = () => {
    valMS++;

    if (valMS <= 9) {
        miliSec = "0" + valMS;
    }
    else if (valMS > 9 && valMS <= 99) {
        miliSec = valMS;
    }
    else {
        valS++;
        valMS = 0;
        miliSec = "00";
    }

    if (valS <= 9) {
        sec = "0" + valS;
    }
    else {
        sec = valS;
    }

    timer.innerText = sec + " : " + miliSec;
}

startButton.addEventListener("click", () => {
    if (!flag) {
        console.log('start called!');
        flag = true;
        intervalId = setInterval(startTimer, 10);
    }
});

stopButton.addEventListener("click", () => {
    console.log('stop called!')
    clearInterval(intervalId);
    flag = false;
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    timer.innerText = "00 : 00";
    valMS = 0;
    valS = 0;
    flag = false;
});






































