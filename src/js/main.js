"use strict";
import * as model from "./model.js";
import { createBoard } from "./newGameView.js";
import { tileShow } from "./tileFlipViev.js";
import { subMenu } from "./subMenuView.js";
import { highScoreModal } from "./modalsView.js";
import { howToPlay } from "./modalsView.js";

const menuContainer = document.querySelector(".main-menu");
const boardContainer = document.querySelector(".board-area");
const mobileBtn = document.querySelector(".menu-view__button");
const mobileBackdrop = document.querySelector(".backdrop-mobile");
let isClickable = true;

function hideMobileMenu() {
  menuContainer.classList.remove("mobile-view");
  mobileBackdrop.classList.add("hidden");
}

export function controlNewGame(dataSet) {
  hideMobileMenu();
  boardContainer.addEventListener("click", handleBoardClick);
  isClickable = true;
  const difficulty = model.difficulties[dataSet.getAttribute("data-tab")];
  createBoard(model.drawTiles(difficulty), difficulty);
  model.state.currentLevel = difficulty.title;
}

// Main menu
menuContainer.addEventListener("click", (e) => {
  const clikedBtn = e.target.classList;

  clikedBtn.contains("new-game") && subMenu();
  clikedBtn.contains("menu__sub-button") && controlNewGame(e.target);
  clikedBtn.contains("high-score") && highScoreModal();
  clikedBtn.contains("how-to-play") && howToPlay();
});

// Game play
function handleBoardClick(e) {
  model.updateDisplayedTiles(tileShow(e));
}

export function handleRemoveEvent() {
  isClickable = false;
  boardContainer.removeEventListener("click", handleBoardClick);
}

boardContainer.addEventListener("click", handleBoardClick);

// Mobile menu view

mobileBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("mobile-view");
  mobileBackdrop.classList.toggle("hidden");
});
