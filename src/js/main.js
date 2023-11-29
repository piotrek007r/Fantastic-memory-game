"use strict";

import { newGame } from "./newGameView.js";
import { subMenu } from "./subMenuView.js";

const menuContainer = document.querySelector(".main-menu");
const menuBtn = document.querySelectorAll(".menu__button");

// main menu
menuContainer.addEventListener("click", (e) => {
  const clikedBtn = e.target.classList;

  clikedBtn.contains("new-game") && subMenu();

  clikedBtn.contains("menu__sub-button") && newGame(clikedBtn);

  clikedBtn.contains("high-score") && modalView()
});
