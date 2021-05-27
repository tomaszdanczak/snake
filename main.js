import { ctx, width, height } from "./components/setup.js";
import { clearCanvas, drawBorder, drawScore } from "./components/draw.js";
import Apple from "./components/apple.js";
import Snake from "./components/snake.js";
import { direction } from "./components/helpers.js";
// import Game

export const snake = new Snake();
export const apple = new Apple();

const draw = () => {
  clearCanvas();
  drawBorder();
  drawScore();
  snake.update();
  snake.draw();
  apple.draw();
};

export const game = setInterval(() => {
  draw();
}, 100);

document.addEventListener("keydown", direction);
