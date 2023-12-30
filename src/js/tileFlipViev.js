import { updateScores } from "./model.js";
import { state } from "./model.js";
import { updateScoresView } from "./gameBarView.js";

let reversedTiles = [];
let isProcessing = false;

export function tileShow(clickedEl) {
  const clickedTile = clickedEl.target;
  const tileReverse = clickedTile.closest(".tile");
  const tileData = clickedTile.getAttribute("data-tab");
  // guard close
  if (
    !tileReverse ||
    tileReverse.classList.contains("matched") ||
    tileReverse.classList.contains("turned") ||
    isProcessing
  )
    return;
  // poirs compare
  if (reversedTiles.length < 2) {
    reverseClickedTile(clickedTile, tileReverse, tileData);
    if (
      reversedTiles.length === 2 &&
      reversedTiles[0].id === reversedTiles[1].id
    ) {
      matchedPair(reversedTiles[0].id);
      return;
    }
    if (reversedTiles.length === 2)
      setTimeout(() => {
        hideTiles();
      }, 1000);
  } else return;
  return tileData;
}

function reverseClickedTile(clickedTile, tileReverse, tileData) {
  tileReverse.classList.add("turned");
  reversedTiles.push({ clickedTile: clickedTile, id: tileData });
}

function matchedPair(id) {
  isProcessing = true;
  reversedTiles.forEach((tile) =>
    setTimeout(() => {
      isProcessing = false;
      tile.clickedTile.closest(".tile").classList.add("matched");
    }, 500)
  );
  updateScores(id);
  updateScoresView(state.currentScore);
  reversedTiles = [];
}

function hideTiles() {
  reversedTiles.forEach((tile) =>
    tile.clickedTile.closest(".tile").classList.remove("turned")
  );
  reversedTiles = [];
}
