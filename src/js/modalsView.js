const body = document.querySelector("main");

export function startGameModal(difficulty) {
  const modalStart = `
    <div class="modal">
      <div class="backdrop"></div>
      <div class="modal__box">
        <h2 class="modal__title">Level ${difficulty.title}</h2>
        <p class="modal__description">
          You have ${difficulty.gameTime} seconds to match ${difficulty.pairs} pairs.
          If you won u recive a bonus points. There are ${difficulty.differentTiles} different tiles. 
        </p>
        <button class="modal__submit">OK</button>
      </div>
    </div>
    `;
  body.insertAdjacentHTML("afterbegin", modalStart);
}
