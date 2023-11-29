const menuSubBtn = document.querySelectorAll(".menu__sub-button");

export function subMenu() {
  menuSubBtn.forEach((btn) => {
    btn.classList.toggle("hidden");
  });
}
