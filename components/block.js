// Block
import { blockSize, ctx } from "./setup.js";
import { circle } from "./helpers.js";

class Block {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  // Draw a square at the block's location
  drawSquare(color) {
    const x = this.col * blockSize;
    const y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  }

  // Draw a circle at the block's location
  drawCircle(color) {
    const centerX = this.col * blockSize + blockSize / 2;
    const centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
  }

  // Check if this block is in the same location as another block
  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}

export default Block;
