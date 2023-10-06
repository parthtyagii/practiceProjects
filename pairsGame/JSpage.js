const indexes = [0, 1, 2, 3, 4];
const indexCount = [6, 6, 6, 6, 6, 6];

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
    if (clickedCards.length === 0 || clickedCards[0] !== event.target) {
        event.target.innerText = event.target.getAttribute("data-key");
        clickedCards.push(event.target);
    }

    if (clickedCards.length === 2) {
        setTimeout(() => {
            //logic...
            if (clickedCards[0].getAttribute("data-key") !== clickedCards[1].getAttribute("data-key")) {
                clickedCards[0].innerText = "";
                clickedCards[1].innerText = "";
            }

            //clear clickedCards array
            clickedCards.pop();
            clickedCards.pop();
        }, 500);
    }

}

const mainContainer = document.querySelector("main .container");
const cards = Array.from(document.querySelectorAll(".container span"));
for (let i = 0; i < 30; i++) {
    // assigning keys to spans
    const el = document.createElement("span");
    shuffle(indexes);

    for (let x of indexes) {
        if (indexCount[x] > 0) {
            const photu = document.createElement("img");
            photu.setAttribute("src", `./icons/${x}.svg`);
            el.setAttribute("data-key", `${x}`);
            el.append(photu);
            mainContainer.append(el);
            indexCount[x]--;
            break;
        }
    }

    // add event listeners to cards
    el.addEventListener("click", check);
};


// stop-watch logic...




