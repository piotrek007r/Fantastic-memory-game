export const scoreLists = {
  easy: [
    { name: "Alice", points: 85 },
    { name: "Bob", points: 72 },
    { name: "Charlie", points: 90 },
    { name: "David", points: 60 },
    { name: "Eva", points: 78 },
    { name: "Frank", points: 92 },
    { name: "Grace", points: 67 },
  ],
  medium: [
    { name: "Hannah", points: 95 },
    { name: "Isaac", points: 82 },
    { name: "Julia", points: 88 },
    { name: "Karl", points: 75 },
    { name: "Lily", points: 79 },
    { name: "Michael", points: 83 },
    { name: "Nora", points: 91 },
  ],
  hard: [
    { name: "Oliver", points: 100 },
    { name: "Penelope", points: 98 },
    { name: "Quincy", points: 97 },
    { name: "Rachel", points: 96 },
    { name: "Samuel", points: 94 },
    { name: "Tina", points: 93 },
    { name: "Ulysses", points: 92 },
  ],
  pro: [
    { name: "Victoria", points: 99 },
    { name: "Winston", points: 100 },
    { name: "Xander", points: 98 },
    { name: "Yvonne", points: 97 },
    { name: "Zara", points: 96 },
    { name: "Aaron", points: 95 },
    { name: "Bella", points: 94 },
  ],
};

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

export function drawTiles({ tilesNum, pairs, differentTiles }) {
  const drawnTiles = [];
  for (let i = 0; i < differentTiles; i++) {
    const randomNum = Math.floor(Math.random() * 20 + 1);
    drawnTiles.push(randomNum);
  }
  console.log(drawnTiles);
}
