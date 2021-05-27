import Apple from "./components/apple.js";
import Snake from "./components/snake.js";

export const snake = new Snake();
export const apple = new Apple();

export const draw = () => {
  clearCanvas();
  drawBorder();
  drawScore(2);
  snake.update();
  snake.draw();
  apple.draw();
};
