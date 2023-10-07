function shuffle(arr) {
    // Fisher-Yates shuffle algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

//now
const clickedCards = [];
const check = (event) => {
    const card = event.target.querySelector("img");

    if (card.style.visibility === "hidden" && (clickedCards.length === 0 || clickedCards[0] !== event.target)) {
        card.style.visibility = "visible";
        clickedCards.push(event.target);
    }

    if (clickedCards.length === 2) {
        setTimeout(() => {
            //logic...
            if (clickedCards[0].getAttribute("data-key") !== clickedCards[1].getAttribute("data-key")) {
                clickedCards[0].querySelector("img").style.visibility = "hidden";
                clickedCards[1].querySelector("img").style.visibility = "hidden";
            }

            //clear clickedCards array
            clickedCards.pop();
            clickedCards.pop();
            gameEnded();
        }, 500);
    }
}

const mainContainer = document.querySelector(".container");
const distribute = () => {
    const indexes = [0, 1, 2, 3, 4];
    const indexCount = [6, 6, 6, 6, 6];
    for (let i = 0; i < 30; i++) {
        // assigning keys to spans
        const el = document.createElement("span");
        const photu = document.createElement("img");
        shuffle(indexes);

        for (let x of indexes) {
            if (indexCount[x] > 0) {
                photu.setAttribute("src", `./icons/${x}.svg`);
                photu.style.visibility = "hidden";
                el.setAttribute("data-key", `${x}`);
                indexCount[x]--;
                break;
            }
        }
        el.append(photu);
        mainContainer.append(el);

        // add event listeners to cards
        el.addEventListener("click", check);
    };
}

const gameEnded = () => {
    const cards = Array.from(document.querySelectorAll(".container span"));
    let count = 0;
    cards.map((c) => {
        if (c.querySelector("img").style.visibility === "visible") {
            count++;
        }
    });

    if (count === 30) {
        clearInterval(stopWatch);
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".modalContainer span").innerText = "Your Time :- " + time;
        document.querySelector(".modalContainer button").innerText = "Try Again";
    }
}

// stop-watch logic...
let stopWatch;
let minutes = 0, seconds = 0;
let time = "";
const watch = () => {
    const timer = document.querySelector("nav");
    let watchMin = "", watchSec = "";

    stopWatch = setInterval(() => {
        seconds++;
        if (seconds < 10) {
            watchSec = "0" + seconds;
        }
        else if (seconds < 60) {
            watchSec = seconds;
        }
        else {
            watchSec = "00";
            seconds = 0;
            minutes++;
        }

        if (minutes < 10) {
            watchMin = "0" + minutes;
        }
        else {
            watchMin = minutes;
        }

        timer.innerText = watchMin + " : " + watchSec;
        time = watchMin + " : " + watchSec;
    }, 1000);
}

//pop-up logic
let flag = false;
const popup = document.querySelector(".modal .modalContainer button");
popup.addEventListener("click", () => {
    if (flag) {
        const container = document.querySelector(".container");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    else {
        flag = true;
    }

    distribute();
    minutes = 0; seconds = 0;
    document.querySelector("nav").innerText = "00 : 00";
    document.querySelector(".modal").style.display = "none";
    watch();
});



