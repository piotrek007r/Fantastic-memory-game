import { updateTimerView } from "./gameBarView.js";
import { gameSummaryModal } from "./modalsView.js";
import { boardClickHandler } from "./main.js";

export const difficulties = {
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

export const state = {
  displayedTiles: [],
  currentScore: 0,
  targetPairs: 0,
  timerFunc: undefined,
  timeLeft: 0,
};

export function updateDisplayedTiles(tileId) {
  const foundTile = state.displayedTiles.find((rec) => rec.id === tileId);
  !foundTile
    ? state.displayedTiles.push({
        id: tileId,
        timesShown: 1,
      })
    : foundTile.timesShown++;
}

export function drawTiles({ pairs, differentTiles }) {
  const randomPairs = [];
  while (randomPairs.length < differentTiles) {
    const randomNum = Math.floor(Math.random() * 24 + 1);
    if (!randomPairs.includes(randomNum)) randomPairs.push(randomNum);
  }
  const pairsRelation = (pairs / differentTiles) * 2;
  const tiles = randomPairs
    .flatMap((tile) => Array.from({ length: pairsRelation }, () => tile))
    .sort((a, b) => Math.random() - 0.5);
  state.targetPairs = pairs;
  return tiles;
}

export function updateScores(id) {
  updateDisplayedTiles(id);
  const [{ timesShown }] = state.displayedTiles.filter(
    (tiles) => tiles.id === id
  );
  // updating scores
  timesShown < 6
    ? (state.currentScore += 25 - (timesShown - 2) * 5)
    : (state.currentScore += 5);
  // updatig pairs count and trig game end
  state.targetPairs--;
  if (state.targetPairs === 0) gameEnd("win");
  // clearing cache
  state.displayedTiles.forEach((tile) => {
    if (tile.id === id) tile.timesShown = 0;
  });
}

// function calcScores() {}

function gameEnd(result) {
  clearInterval(state.timerFunc);
  const finalScoring = state.currentScore + state.timeLeft;
  setTimeout(() => gameSummaryModal(result, finalScoring), 1200);
}

export function updateTimer(time) {
  let counter = time;
  state.timerFunc = setInterval(() => {
    const minutes = Math.floor(counter / 60);
    const seconds = String(counter % 60).padStart(2, 0);
    state.timeLeft = counter;
    counter--;
    const formatedTime = `${minutes}:${seconds}`;
    updateTimerView(formatedTime);
    if (minutes == 0 && seconds == 0) {
      gameEnd("lost");
    }
  }, 1000);
}
