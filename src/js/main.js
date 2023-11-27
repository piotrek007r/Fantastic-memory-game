"use strict";

const menuContainer = document.querySelector(".main-menu");
const menuBtn = document.querySelectorAll(".menu__button");
const menuSubBtn = document.querySelectorAll(".menu__sub-button");
const mainBoard = document.querySelector(".board-area");
let newBoard;

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
}
// new game
function newGame(clikedBtn) {

  // difficulty choice buttons
  if (clikedBtn.contains("easy")) createBoard(6, "easy");
  if (clikedBtn.contains("medium")) createBoard(12, "medium");
  if (clikedBtn.contains("hard")) createBoard(20, "hard");
  if (clikedBtn.contains("pro")) createBoard(30, "pro");
  // display modal
}

// main menu
menuContainer.addEventListener("click", (e) => {
  const clikedBtn = e.target.classList;
  // new game button
  if (clikedBtn.contains("new-game")) {
    menuSubBtn.forEach((btn) => {
      btn.classList.toggle("hidden");
    });
  }
  clikedBtn.contains("menu__sub-button") && newGame(clikedBtn);
});
