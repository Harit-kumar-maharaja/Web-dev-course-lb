const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newgamebtn = document.querySelector(".btn");

let currentplayer;
let gamegrid;

const winningposition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Initialize the game
function initgame() {
    currentplayer = "X";
    gamegrid = ["", "", "", "", "", "", "", "", ""];

    // Clear the boxes and reset their classes
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        box.classList = `box box${index + 1}`;
    });

    // Remove the active class from the new game button
    newgamebtn.classList.remove("active");

    // Update the game info
    gameinfo.innerHTML = `Current Player - ${currentplayer}`;
}
initgame();

// Check if the game is over
function checkgameover() {
    let answer = "";

    winningposition.forEach((position) => {
        // Check if all three boxes in the position are non-empty and have the same value
        if (
            (gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") &&
            (gamegrid[position[0]] === gamegrid[position[1]]) &&
            (gamegrid[position[1]] === gamegrid[position[2]])
        ) {
            // Determine the winner
            if (gamegrid[position[0]] === "X") {
                answer = "X";
            } else {
                answer = "O";
            }

            // Disable pointer events on all boxes
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            // Highlight the winning boxes
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    // Display the winner
    if (answer !== "") {
        gameinfo.innerHTML = `Winner Player - ${answer}`;
        newgamebtn.classList.add("active");
        return;
    }

    // Check for a tie
    let fillcount = 0;
    gamegrid.forEach((box) => {
        if (box !== "") {
            fillcount++;
        }
    });

    // If the board is full, the game is tied
    if (fillcount === 9) {
        gameinfo.innerHTML = "Game Tied!";
        newgamebtn.classList.add("active");
    }
}

// Swap the current player
function swapturn() {
    currentplayer = currentplayer === "X" ? "O" : "X";
    gameinfo.innerHTML = `Current player - ${currentplayer}`;
}

// Handle a box click
function handleClick(index) {
    if (gamegrid[index] === "") {
        boxes[index].innerHTML = currentplayer;
        gamegrid[index] = currentplayer;
        // Swap the turn
        swapturn();
        // Check for a winner or tie
        checkgameover();
    }
}

// Add event listeners to each box
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    });
});

// Add an event listener to the new game button
newgamebtn.addEventListener("click", initgame);
