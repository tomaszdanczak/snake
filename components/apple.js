import Block from "./block.js";
import { widthInBlocks, heightInBlocks } from "./setup.js";

class Apple {
  constructor() {
    this.position = new Block(10, 10);
  }

  // Draw a circle at the apple's location
  draw = () => {
    this.position.drawCircle("LimeGreen");
  };

  // Move the apple to a new random location
  update = () => {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1);
    var radnomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;

    this.position = new Block(randomCol, radnomRow);
  };
}

export default Apple;
