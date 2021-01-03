const controlLeft = document.querySelector("#control-left");
const controlRight = document.querySelector("#control-right");
const cardsWrapper = document.querySelector(".cards-wrapper");
const dx = 210;
const animationDuration = 750;
let isAnimated = false;
let currentPosition = 0;

function setAnimationBlock() {
  isAnimated = true;
  setTimeout(() => {
    isAnimated = false;
  }, animationDuration);
}

function animationMove(from, to) {
  cardsWrapper.animate([
    { transform: `translate(${from}px, 0)` },
    { transform: `translate(${to}px, 0)` }
  ], {
    duration: animationDuration,
    easing: "ease-in",
    fill: "forwards"
  });
}

controlRight.addEventListener("click", () => {
  const newX = currentPosition - dx;
  if (isAnimated || (cardsWrapper.scrollWidth + newX) - cardsWrapper.offsetWidth < 0) {
    return;
  }
  setAnimationBlock();  
  animationMove(currentPosition, newX);
  currentPosition = newX;
});
controlLeft.addEventListener("click", () => {
  if (isAnimated || currentPosition + dx > 0) {
    return;
  }
  setAnimationBlock();
  const newX = currentPosition + dx;
  animationMove(currentPosition, newX);
  currentPosition = newX;
});
