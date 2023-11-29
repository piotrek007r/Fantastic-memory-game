const body = document.querySelector("main");

export function startGameModal(difficulty) {
  const modalStart = `
    <div class="modal">
      <div class="backdrop"></div>
      <div class="modal__box">
        <h2 class="modal__title">Level ${difficulty}</h2>
        <p class="modal__description">
          You have ${} seconds to match ${} pairs.
          If you won u recive a bonus points. There are ${} different tiles. 
        </p>
        <button class="modal__submit">OK</button>
      </div>
    </div>
    `;
  body.insertAdjacentHTML("afterbegin", modalStart);
}
