import { ctx, width, height, blockSize, score } from "./setup.js";

export const clearCanvas = () => {
  ctx.clearRect(0, 0, width, height);
};

export const drawBorder = () => {
  ctx.fillStyle = "Grey";
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, width);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

export const drawScore = () => {
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Wynik: " + score.value, blockSize, blockSize);
};
