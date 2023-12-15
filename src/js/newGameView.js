import { startGameModal } from "./modalsView.js";

const mainBoard = document.querySelector(".board-area");
let newBoard;
let gameBarNode;

// start a game
export function createBoard(boardTiles, currentLevel) {
  newBoard && newBoard.remove();
  gameBarNode && gameBarNode.remove();

  // creatng desired board
  newBoard = document.createElement("div");
  mainBoard.appendChild(newBoard);
  newBoard.classList.add(`board-${currentLevel.title}`);
  // filling board with tiles
  boardTiles.forEach((el) => {
    const tile = `
        <div class="tile__container">
          <div class="tile" >
            <div class="tile--front" data-tab=${el}></div>
            <div class="tile--back" style="background-image: url('/src/assets/tile-${el}.svg')"></div>
          </div>
        </div>`;
    newBoard.insertAdjacentHTML("afterbegin", tile);
  });
  // creating game bar with scores and time left
  const gameBar = `
  <div class="game-bar__display">
    <div class="display display__timer">
    <h4>Time left:</h4>
    <p>0</p>
    </div>
    <div class="display display__difficutly">
    <h4>Difficulty:</h4>
    <p>${currentLevel.title}</p>
    </div>
    <div class="display display__points">
    <h4>Points:</h4>
    <p>0</p>
    </div>
  </div>
  `;

  newBoard.insertAdjacentHTML("beforebegin", gameBar);
  gameBarNode = document.querySelector(".game-bar__display");
  currentLevel.title === "pro"
    ? gameBarNode.classList.add("display--pro")
    : gameBarNode.classList.remove("display--pro");
  // startGameModal(currentLevel);
}
