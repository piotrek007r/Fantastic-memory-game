import { startGameModal } from "./modalsView.js";
import { difficulties } from "./model.js";

const mainBoard = document.querySelector(".board-area");
let newBoard;

// start a game
export function createBoard(difficulty) {
  newBoard && newBoard.remove();
  // creatng desired board
  newBoard = document.createElement("div");
  mainBoard.appendChild(newBoard);
  newBoard.classList.add(`board-${difficulty.title}`);
  // filling board with tiles
  for (let i = 0; i < difficulty.tilesNum; i++) {
    const randomNum = Math.floor(Math.random() * 20 + 1);
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

// // new game
// export function newGame(clikedBtn) {
//   // difficulty choice buttons
//   clikedBtn.contains("easy") && createBoard(difficulties.easy);
//   clikedBtn.contains("medium") && createBoard(difficulties.medium);
//   clikedBtn.contains("hard") && createBoard(difficulties.hard);
//   clikedBtn.contains("pro") && createBoard(difficulties.pro);
// }


