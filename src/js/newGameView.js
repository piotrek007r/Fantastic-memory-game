import { startGameModal } from "./modalsView.js";

const mainBoard = document.querySelector(".board-area");
let newBoard;

const difficulties = {
  easy: {
    title: "easy",
    tilesNum: 12,
    gameTime: 60,
    pairs: 6,
    differentTiles: 3,
  },
  medium: {
    title: "medium",
    tilesNum: 16,
    gameTime: 160,
    pairs: 8,
    differentTiles: 8,
  },
  hard: {
    title: "hard",
    tilesNum: 20,
    gameTime: 70,
    pairs: 10,
    differentTiles: 10,
  },
  pro: {
    title: "pro",
    tilesNum: 48,
    gameTime: 180,
    pairs: 24,
    differentTiles: 24,
  },
};

// start a game
function createBoard(difficulty) {
  newBoard && newBoard.remove();
  // creatng desired board
  newBoard = document.createElement("div");
  mainBoard.appendChild(newBoard);
  newBoard.classList.add(`board-${difficulty.title}`);
  // filling board with tiles
  for (let i = 0; i < difficulty.tilesNum; i++) {
    const randomNum = Math.floor(Math.random() * 20 + 1);
    console.log(randomNum);
    const tile = `
        <div class="tile__container">
        <div class="tile">
        <div class="tile--front" ></div>
        <div class="tile--back" style="background-image: url('/src/assets/tile-${randomNum}.svg')"></div>
        </div>
        </div>`;
    newBoard.insertAdjacentHTML("afterbegin", tile);
  }
  // display modal
  startGameModal(difficulty);
}

// new game
export function newGame(clikedBtn) {
  // difficulty choice buttons
  clikedBtn.contains("easy") && createBoard(difficulties.easy);
  clikedBtn.contains("medium") && createBoard(difficulties.medium);
  clikedBtn.contains("hard") && createBoard(difficulties.hard);
  clikedBtn.contains("pro") && createBoard(difficulties.pro);
}
