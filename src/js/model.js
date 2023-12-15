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

export const displayedTiles = [];

export let currentScore = 0;

export function updateDisplayedTiles(tileId) {
  const foundTile = displayedTiles.find((rec) => rec.id === tileId);
  !foundTile
    ? displayedTiles.push({
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
  return tiles;
}

export function updateScores(id) {
  updateDisplayedTiles(id);
  const [{ timesShown }] = displayedTiles.filter((tiles) => tiles.id === id);
  // updating scores
  timesShown < 6
    ? (currentScore += 25 - (timesShown - 2) * 5)
    : (currentScore += 5);
  // clearing cache  
  displayedTiles.forEach((tile) => {
    if (tile.id === id) tile.timesShown = 0;
  });
}
