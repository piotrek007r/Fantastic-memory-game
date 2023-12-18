import { scoreLists } from "./SCORE_LIST.js";
import { updateTimer } from "./model.js";

const body = document.querySelector("main");
let activeModal = "";
let handleTime = 0;

// ----------< HELPER FUNCTIONS >---------------

function clickHandler(e) {
  const targetBtn = e.target.getAttribute("data-tab");
  const modalStart = e.target.closest(".modal__box--start-game");
  // Confirm to start a game
  if (targetBtn === "close-modal" && modalStart) {
    updateTimer(handleTime);
    closeModal();
    // close other madals
  } else if (targetBtn === "close-modal") {
    closeModal();
    // toggling difficultie bars
  } else if (targetBtn) {
    const sortedList = scoreLists[targetBtn].sort(
      (a, b) => b.points - a.points
    );
    closeModal();
    highScoreModal(sortedList, targetBtn);
  } else return;
}

function closeModal() {
  activeModal.remove();
  activeModal = "";
}

// ----------< START GAME MODAL >---------------

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
        <button class="modal__submit" data-tab="close-modal">OK</button>
        </div>
        </div>
        `;
  body.insertAdjacentHTML("afterbegin", modalStart);

  activeModal = document.querySelector(".modal");

  activeModal.addEventListener("click", clickHandler);
  handleTime = difficulty.gameTime;
}

// ----------< HIGH-SCORES MODAL >---------------

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

export function highScoreModal(
  scoreList = scoreLists.easy,
  handleBtn = "easy"
) {
  const modalHighScore = `
    <div class="modal">
    <div class="backdrop"></div>
    <div class="modal__box--high-score">
        <h2 class="modal__title--high-score">High Scores</h2>
        <div class="modal__score--difficulties">
        <button class="high-score__difficulty--button easy" data-tab="easy">Easy</button>
        <button class="high-score__difficulty--button medium" data-tab="medium">Medium</button>
        <button class="high-score__difficulty--button hard" data-tab="hard">Hard</button>
        <button class="high-score__difficulty--button pro" data-tab="pro">Like a Pro</button>
        </div>
        <table class="socre-board__table">
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
        </table>
        <button class="modal__submit" data-tab="close-modal">OK</button>
        </div>
        </div>`;
  body.insertAdjacentHTML("afterbegin", modalHighScore);

  activeModal = document.querySelector(".modal");
  const activeBtn = activeModal.querySelector(`.${handleBtn}`);
  activeBtn.classList.add("highlighted");

  activeModal.addEventListener("click", clickHandler);
}

//----------< HOW TO PLAY MODAL >---------------

export function howToPlay() {
  const modalHowToPlay = `
  <div class="modal">
  <div class="backdrop"></div>
  <div class="modal__box--how-to-play">
    <h2 class="modal__title--how-to-play">Rules</h2>
    <p class="modal__description--how-to-play">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis molestias quasi impedit ullam. Quod maiores repellendus fugit. Earum minima numquam dolores nemo excepturi laborum debitis. Non, aperiam! Et, provident architecto.
    Soluta hic similique veniam rerum adipisci necessitatibus voluptatum dolor ducimus illo. Nesciunt magnam maxime voluptatem ipsam, numquam molestiae quod eos quos eligendi suscipit? Voluptatibus ducimus saepe facere nesciunt dolore cum.</p>
    <button class="modal__submit" data-tab="close-modal">OK</button>
  </div>
  </div>`;
  body.insertAdjacentHTML("afterbegin", modalHowToPlay);
  activeModal = document.querySelector(".modal");
  activeModal.addEventListener("click", clickHandler);
}

//----------< END GAME MODAL >---------------

export function gameSummaryModal(result, scores) {
  const modalSummary = ` 
  <div class="modal">
  <div class="backdrop"></div>
  <div class="modal__box--end-game">
    <h2 class="modal__title">You ${result}</h2>
    <div class="modal__description"><p> Score:</p> <p>${scores}</p></div>
    <button class="modal__submit" data-tab="close-modal">OK</button>
  </div>
</div>
  `;

  body.insertAdjacentHTML("afterbegin", modalSummary);
  activeModal = document.querySelector(".modal");
  activeModal.addEventListener("click", clickHandler);
}
