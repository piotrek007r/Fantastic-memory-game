const body = document.querySelector("main");

export function startGameModal(difficulty) {
  const modalStart = `
    <div class="modal">
      <div class="backdrop"></div>
      <div class="modal__box--start-game">
        <h2 class="modal__title">Level <span>${difficulty.title}</span></h2>
        <p class="modal__description">
          You have ${difficulty.gameTime} seconds to match ${
    difficulty.pairs
  } pairs.
          If you win, you recive a bonus points. There are ${
            difficulty.differentTiles
          } different types of tiles. 
        </p>
        <h3 class="modal__high-score" >Top Score: <span>${"80"}</span></h3>
        <button class="modal__submit">OK</button>
        </div>
        </div>
        `;
  body.insertAdjacentHTML("afterbegin", modalStart);
}

const scoreList = [
  { name: "Player 1", points: 85 },
  { name: "Player 2", points: 72 },
  { name: "Player 3", points: 90 },
  { name: "Player 4", points: 60 },
  { name: "Player 5", points: 78 },
  { name: "Player 6", points: 92 },
  { name: "Player 7", points: 67 },
];

function generateScoreList(scores) {
  let result = "";

  function generateListLine(scores = {}, index) {
    const { name = "...", points = "..." } = scores;
    return `<tr>
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${points}</td>
  </tr>`;
  }

  for (let i = 0; i < 10; i++) {
    result += generateListLine(scores[i], i);
  }
  return result;
}

function generateScoreTable(scoreList) {
  return `<table class="socre-board__table">
  <thead>
    <tr>
      <th class="score-board__rank-field">Rank</th>
      <th class="score-board__name-field">Name</th>
      <th class="score-board__score-field">Score</th>
    </tr>
  </thead>
  <tbody>      
  ${generateScoreList(scoreList)}      
  </tbody>
</table>`;
}

export function highScoreModal() {
  const modalHighScore = `
  <div class="modal">
      <div class="backdrop"></div>
      <div class="modal__box--high-score">
        <h2 class="modal__title--high-score">High Scores</h2>
        <div class="modal__score--difficulties">
          <button class="menu__button menu__sub-button easy">Easy</button>
          <button class="menu__button menu__sub-button medium">Medium</button>
          <button class="menu__button menu__sub-button hard">Hard</button>
          <button class="menu__button menu__sub-button pro">Like a Pro</button>
        </div>
        ${generateScoreTable(scoreList)}
        <button class="modal__submit">OK</button>
      </div>
    </div>`;
  body.insertAdjacentHTML("afterbegin", modalHighScore);

  const scoreModalBtn = document.querySelector(".modal__score--difficulties");

  
  scoreModalBtn.addEventListener("click", (e) => {
    const clikedBtn = e.target.classList;
    console.log(e);
    clikedBtn.contains("easy") && console.log("1");
    clikedBtn.contains("medium") && createBoard(difficulties.medium);
    clikedBtn.contains("hard") && createBoard(difficulties.hard);
    clikedBtn.contains("pro") && createBoard(difficulties.pro);
  });
}
