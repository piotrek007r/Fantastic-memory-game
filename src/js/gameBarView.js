export function updateScoresView(points) {
  const scores = document.querySelector(".display__points p");
  scores.textContent = points;
}

export function updateTimerView(time) {
  console.log(time);
  const timer = document.querySelector(".display__timer p");
  timer.textContent = time;
}
