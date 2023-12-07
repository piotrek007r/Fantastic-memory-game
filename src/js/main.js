"use strict";
import * as model from "./model.js";
import { createBoard } from "./newGameView.js";
import { subMenu } from "./subMenuView.js";
import { highScoreModal } from "./modalsView.js";
import { howToPlay } from "./modalsView.js";

const menuContainer = document.querySelector(".main-menu");
const menuBtn = document.querySelectorAll(".menu__button");

export function controlNewGame(dataSet) {
  const difficulty = model.difficulties[dataSet.getAttribute("data-tab")];
  model.drawTiles(difficulty);
  createBoard(difficulty);
}

// main menu
menuContainer.addEventListener("click", (e) => {
  const clikedBtn = e.target.classList;

  clikedBtn.contains("new-game") && subMenu();

  clikedBtn.contains("menu__sub-button") && controlNewGame(e.target);

  clikedBtn.contains("high-score") && highScoreModal();

  clikedBtn.contains(".how-to-play") && howToPlay();
});
