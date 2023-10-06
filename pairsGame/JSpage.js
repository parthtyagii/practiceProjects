function shuffle(arr) {
    // Fisher-Yates shuffle algorithm
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const indexes = [0, 1, 2, 3, 4, 5];
const indexCount = [6, 6, 6, 6, 6, 6];

//now
const clickedCards = [];
const check = (event) => {
    if (clickedCards.length === 0 || clickedCards[0] !== event.target) {
        clickedCards.push(event.target);
    }

    if (clickedCards.length === 2) {
        //logic...
        if (clickedCards[0].getAttribute("data-key") !== clickedCards[1].getAttribute("data-key")) {
            
        }

        //clear clickedCards array
        clickedCards.pop();
        clickedCards.pop();
    }

}

const cards = Array.from(document.querySelectorAll(".container span"));
cards.map((card) => {
    // assigning keys to spans
    shuffle(indexes);
    for (let x of indexes) {
        if (indexCount[x] > 0) {
            card.setAttribute("data-key", "x");
            indexCount[x]--;
            break;
        }
    }

    // add event listeners to cards
    card.addEventListener("click", check);
});






