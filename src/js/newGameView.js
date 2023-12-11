import { startGameModal } from "./modalsView.js";
import { displayedTiles } from "./model.js";

const mainBoard = document.querySelector(".board-area");
let newBoard;
let reversedTiles = [];

// start a game
export function createBoard(boardTiles, currentLevel) {
  newBoard && newBoard.remove();
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

  // startGameModal(currentLevel);
}

// Game Play
export function tileShow(clickedEl) {
  console.log("hhm");
  const clickedTile = clickedEl.target;
  const tileReverse = clickedTile.closest(".tile");
  const tileData = clickedTile.getAttribute("data-tab");
  console.log(clickedTile);

  if (
    tileReverse.classList.contains("matched") ||
    clickedTile.classList.contains("tile--back")
  )
    return;
  if (reversedTiles.length < 2) {
    tileReverse.classList.add("turned");
    reversedTiles.push({ clickedTile: clickedTile, id: tileData });
    console.log(reversedTiles);
    if (
      reversedTiles.length === 2 &&
      reversedTiles[0].id === reversedTiles[1].id
    ) {
      console.log("ok");
      reversedTiles.forEach((tile) =>
        tile.clickedTile.closest(".tile").classList.add("matched")
      );
      displayedTiles.timesShown = 0;
      reversedTiles = [];
      return;
    }
    if (reversedTiles.length === 2)
      setTimeout(() => {
        hideTiles();
      }, 1000);
  } else return;
  return tileData;
}

function hideTiles() {
  reversedTiles.forEach((tile) =>
    tile.clickedTile.closest(".tile").classList.remove("turned")
  );
  reversedTiles = [];
}
