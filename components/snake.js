import Block from "./block.js";
import { widthInBlocks, heightInBlocks, score } from "./setup.js";
import { gameOver } from "./helpers.js";
import { apple } from "./../main.js";

class Snake {
  constructor() {
    this.body = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
    this.direction = "RIGHT";
    this.nextDirection = "RIGHT";
  }

  // Draw a square for each segment of the snake's body
  draw() {
    this.body.map((segment, index) =>
      index === 0 ? segment.drawSquare("Red") : segment.drawSquare("Blue")
    );
  }

  // Create a new head and add it to the beginning of
  // the snake to move the snake in its current direction
  update() {
    const head = this.body[0];
    let newHead;

    this.direction = this.nextDirection;

    switch (this.direction) {
      case "RIGHT":
        newHead = new Block(head.col + 1, head.row);
        break;
      case "DOWN":
        newHead = new Block(head.col, head.row + 1);
        break;
      case "LEFT":
        newHead = new Block(head.col - 1, head.row);
        break;
      case "UP":
        newHead = new Block(head.col, head.row - 1);
        break;
    }

    if (this.checkCollision(newHead)) {
      gameOver();
      return;
    }

    this.body = [newHead, ...this.body];

    if (newHead.equal(apple.position)) {
      score.value++;
      apple.update();
    } else {
      this.body.pop();
    }
  }

  // Check if the snake's new head has collided with the wall or itself
  checkCollision(head) {
    var leftCollision = head.col === 0;
    var topCollision = head.row === 0;
    var righCollision = head.col === widthInBlocks - 1;
    var bottomCollision = head.row === heightInBlocks - 1;

    var wallCollision =
      leftCollision || topCollision || righCollision || bottomCollision;

    var selfCollision = false;

    for (var i = 0; i < this.body.length; i++) {
      if (head.equal(this.body[i])) {
        selfCollision = true;
      }
    }

    return wallCollision || selfCollision;
  }

  // Set the snake's next direction based on the keyboard
  setDirection(newDirection) {
    if (this.direction === "UP" && newDirection === "DOWN") {
      return;
    } else if (this.direction === "RIGHT" && newDirection === "LEFT") {
      return;
    } else if (this.direction === "DOWN" && newDirection === "UP") {
      return;
    } else if (this.direction === "LEFT" && newDirection === "RIGHT") {
      return;
    }
    this.nextDirection = newDirection;
  }
}

export default Snake;
