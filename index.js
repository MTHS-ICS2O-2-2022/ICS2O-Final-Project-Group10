const tiles = document.querySelectorAll(".tile");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function setHoverText() {
  //remove all hover text
  tiles.forEach((tile) => {
    tile.classList.remove("x-hover");
    tile.classList.remove("o-hover");
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach((tile) => {
    if (tile.innerText == "") {
      tile.classList.add(hoverClass);
    }
  });
}

setHoverText();

function tileClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }

  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }

  if (turn === PLAYER_X) {
    tile.innerText = PLAYER_X;
    boardState[tileNumber - 1] = PLAYER_X;
    turn = PLAYER_O;
  } else {
    tile.innerText = PLAYER_O;
    boardState[tileNumber - 1] = PLAYER_O;
    turn = PLAYER_X;
  }
  setHoverText();
  checkWinner();
}

function checkWinner() {
  //Check for a winner
  for(const winningCombination of winningCombinations) {
    console.log(winningCombination)
    }
  }

const winningCombinations =[
  //row
  { combo: [1, 2, 3], strikeclass: "strike-row-1"},
  { combo: [4, 5, 6], strikeclass: "strike-row-2"},
  { combo: [7, 8, 9], strikeclass: "strike-row-3"},
  //columns
  { combo: [1, 4, 7], strikeclass: "strike-column-1"},
  { combo: [2, 5, 8], strikeclass: "strike-column-2"},
  { combo: [3, 6, 9], strikeclass: "strike-column-3"},
  //diagnols
  { combo: [1, 5, 9], strikeclass: "strike-diagonal-1"},
  { combo: [3, 5, 7], strikeclass: "strike-diagonal-2"}
]