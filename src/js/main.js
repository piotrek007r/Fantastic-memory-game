"use strict";
import * as model from "./model.js";
import { createBoard } from "./newGameView.js";
import { tileShow } from "./tileFlipViev.js";
import { subMenu } from "./subMenuView.js";
import { highScoreModal } from "./modalsView.js";
import { howToPlay } from "./modalsView.js";

const menuContainer = document.querySelector(".main-menu");
const boardContainer = document.querySelector(".board-area");
const menuBtn = document.querySelectorAll(".menu__button");

export function controlNewGame(dataSet) {
  const difficulty = model.difficulties[dataSet.getAttribute("data-tab")];
  createBoard(model.drawTiles(difficulty), difficulty);
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
export const boardClickHandler = boardContainer.addEventListener(
  "click",
  (e) => {
    // show a tile and record its ID
    model.updateDisplayedTiles(tileShow(e));
  }
);
