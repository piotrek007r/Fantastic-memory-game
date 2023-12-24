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
let isPaused = false;

function hideMobileMenu() {
  menuContainer.classList.remove("mobile-view");
  mobileBackdrop.classList.add("hidden");
}

export function controlNewGame(dataSet) {
  model.resetState();
  hideMobileMenu();
  boardContainer.addEventListener("click", handleBoardClick);
  isClickable = true;
  isPaused = false;
  const difficulty = model.difficulties[dataSet.getAttribute("data-tab")];
  createBoard(model.drawTiles(difficulty), difficulty);
  model.state.currentLevel = difficulty.title;
}

// Main menu
menuContainer.addEventListener("click", (e) => {
  const clikedBtn = e.target.classList;

  clikedBtn.contains("menu__sub-button") && controlNewGame(e.target);
  clikedBtn.contains("new-game") && subMenu();
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
  if (model.state.timeLeft > 0) {
    if (isPaused) {
      model.updateTimer(model.state.timeLeft);
      isPaused = false;
    } else {
      // model.state.timeOnPouse = model.state.timeLeft;
      clearInterval(model.state.timerFunc);
      isPaused = true;
    }
  }

  menuContainer.classList.toggle("mobile-view");
  mobileBackdrop.classList.toggle("hidden");
});
