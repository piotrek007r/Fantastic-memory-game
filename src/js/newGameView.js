import { startGameModal } from "./modalsView.js";

const mainBoard = document.querySelector(".board-area");
let newBoard;

const difficulties = {
  easy: {
    name: "easy",
    tilesNum: 6,
    gameTime: 120,
    pairs: 3,
    differentTiles: 3,
  },
};

// start a game
function createBoard(tilesNum, difficulty) {
  newBoard && newBoard.remove();
  // creatng desired board
  newBoard = document.createElement("div");
  mainBoard.appendChild(newBoard);
  newBoard.classList.add(`board-${difficulty}`);
  // filling board with tiles
  for (let i = 0; i < tilesNum; i++) {
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
  if (clikedBtn.contains("easy")) createBoard(6, "easy");
  if (clikedBtn.contains("medium")) createBoard(12, "medium");
  if (clikedBtn.contains("hard")) createBoard(20, "hard");
  if (clikedBtn.contains("pro")) createBoard(30, "pro");
}
