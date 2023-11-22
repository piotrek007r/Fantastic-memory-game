"use strict";

const menuContainer = document.querySelector(".main-menu");
const menuBtn = document.querySelectorAll(".menu__button");
const menuSubBtn = document.querySelectorAll(".menu__sub-button");
const mainBoard = document.querySelector(".board-area");

const createTile = (tilesNum, difficulty) => {
  const currentBoard = document.querySelector(`.board-${difficulty}`);
  currentBoard.classList.remove("hidden");
  for (let i = 0; i < tilesNum; i++) {
    const tile = `
        <div class="tile__container">
            <div class="tile">
            <div class="tile--front"></div>
            <div class="tile--back"></div>
            </div>
        </div>`;
    currentBoard.insertAdjacentHTML("afterbegin", tile);
  }
};

menuContainer.addEventListener("click", (e) => {
  const clikedBtn = e.target.classList;
  if (clikedBtn.contains("new-game")) {
    menuSubBtn.forEach((btn) => {
      btn.classList.toggle("hidden");
    });
  }
  if (clikedBtn.contains("easy")) createTile(9, "easy");
  if (clikedBtn.contains("medium")) createTile(12);
  if (clikedBtn.contains("hard")) createTile(16);
});
