const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const boxes = Array.from(document.querySelectorAll(".container span"));
boxes.map(b => {
    b.addEventListener("click", (event) => {
        let i = event.target.getAttribute("data-key");
        if (arr[Math.floor(i / 3)][Math.floor(i % 3)] === 0) {
            arr[Math.floor(i / 3)][Math.floor(i % 3)] = 1;
            event.target.innerText = "O";
            console.log(arr);
            checkIf(computerTurn);
        }
    });
});


//now
const whereToPut = (num) => {
    //row-wise
    for (let i = 0; i < 3; i++) {
        let numCount = 0;
        let emptyCount = 0;
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] == num) {
                numCount++;
            }
            else if (arr[i][j] == 0) {
                emptyCount++;
            }
        }

        if (numCount === 2 && emptyCount === 1) {
            if (arr[i][0] === 0) arr[i][0] = -1;
            if (arr[i][1] === 0) arr[i][1] = -1;
            if (arr[i][2] === 0) arr[i][2] = -1;
            return true;
        }
    }

    //column-wise
    for (let j = 0; j < 3; j++) {
        let numCount = 0;
        let emptyCount = 0;
        for (let i = 0; i < 3; i++) {
            if (arr[i][j] == num) {
                numCount++;
            }
            else if (arr[i][j] == 0) {
                emptyCount++;
            }
        }

        if (numCount === 2 && emptyCount === 1) {
            if (arr[0][j] === 0) arr[0][j] = -1;
            if (arr[1][j] === 0) arr[1][j] = -1;
            if (arr[2][j] === 0) arr[2][j] = -1;
            return true;
        }
    }

    //forward-diagnol
    let i = 0, j = 0;
    let numCount = 0;
    let emptyCount = 0;
    while (i <= 2 && j <= 2) {
        if (arr[i][j] == num) {
            numCount++;
        }
        else if (arr[i][j] == 0) {
            emptyCount++;
        }
        i++; j++;
    }

    if (numCount === 2 && emptyCount === 1) {
        if (arr[0][0] === 0) arr[0][0] = -1;
        if (arr[1][1] === 0) arr[1][1] = -1;
        if (arr[2][2] === 0) arr[2][2] = -1;
        return true;
    }

    //backward-diagnol
    i = 0; j = 2; numCount = 0; emptyCount = 0;
    while (i <= 2 && j <= 2) {
        if (arr[i][j] == num) {
            numCount++;
        }
        else if (arr[i][j] == 0) {
            emptyCount++;
        }
        i++; j--;
    }

    if (numCount === 2 && emptyCount === 1) {
        if (arr[0][2] === 0) arr[0][2] = -1;
        if (arr[1][1] === 0) arr[1][1] = -1;
        if (arr[2][0] === 0) arr[2][0] = -1;
        return true;
    }

    return false;
}

const checkIf = (func) => {
    //check for winner
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== 0 && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            return console.log("Winner is", console.log(arr[i][0]));
        }
    }

    for (let i = 0; i < 3; i++) {
        if (arr[0][i] !== 0 && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
            return console.log("Winner is", console.log(arr[0][i]));
        }
    }

    if (arr[1][1] !== 0 && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        return console.log("Winner is", console.log(arr[1][1]));
    }

    if (arr[1][1] !== 0 && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        return console.log("Winner is", console.log(arr[1][1]));
    }

    // checking for empty
    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[i][j] === 0) {
                count++;
            }
        }
    }

    if (count === 0) {
        return console.log("No Result!");
    }

    return func();
}

const computerTurn = () => {
    if (whereToPut(-1) || whereToPut(1)) {
        // check for result & return
        return checkIf(() => { });
    }

    for (let i = 0; i < 9; i += 2) {
        if (arr[Math.floor(i / 3)][Math.floor(i % 3)] === 0) {
            arr[Math.floor(i / 3)][Math.floor(i % 3)] = -1;
            // check for result and return
            return checkIf(() => { });
        }
    }

    for (let i = 1; i < 9; i += 2) {
        if (arr[Math.floor(i / 3)][Math.floor(i % 3)] === 0) {
            arr[Math.floor(i / 3)][Math.floor(i % 3)] = -1;
            // check for result and return
            return checkIf(() => { });
        }
    }
}





