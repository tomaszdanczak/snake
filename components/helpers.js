import { ctx, width, height } from "./setup.js";
import { game } from "./../main.js";
import { snake } from "./../main.js";

// Draw a circle
export const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

export const gameOver = () => {
  clearInterval(game);
  ctx.font = "60px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Game Over", width / 2, height / 2);
};

export const direction = (e) => {
  switch (e.key) {
    case "ArrowUp":
      snake.setDirection("UP");
      break;
    case "ArrowRight":
      snake.setDirection("RIGHT");
      break;
    case "ArrowDown":
      snake.setDirection("DOWN");
      break;
    case "ArrowLeft":
      snake.setDirection("LEFT");
      break;
  }
};
