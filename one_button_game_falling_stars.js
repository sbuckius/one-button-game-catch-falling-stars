// One-Button Game: Catch the Falling Stars
// Move your mouse to catch stars, click to restart

let numStars = 10;   // number of stars
let starX = [];      // star x positions
let starY = [];      // star y positions
let playerY;         // player vertical position
let score = 0;       // score counter

function setup() {
  createCanvas(400, 400);
  playerY = height - 30;

  // Create random star positions
  for (let i = 0; i < numStars; i++) {
    starX[i] = random(width);
    starY[i] = random(-200, 0);
  }
}

function draw() {
  background(20);

  // Draw player (a white bar)
  fill(255);
  rect(mouseX - 25, playerY, 50, 10);

  // Move and draw stars
  fill("yellow");
  for (let i = 0; i < numStars; i++) {
    starY[i] += 3; // fall speed
    circle(starX[i], starY[i], 10);

    // Check if player catches a star
    if (
      starY[i] > playerY - 5 && starY[i] < playerY + 10 && // same height as player
      starX[i] > mouseX - 25 && starX[i] < mouseX + 25     // within player width
    ) {
      score++; // add 1 point
      // Reset star to top
      starY[i] = random(-200, 0);
      starX[i] = random(width);
    }

    // Reset star if it falls past the bottom
    if (starY[i] > height) {
      starY[i] = random(-200, 0);
      starX[i] = random(width);
    }
  }

  // Display score and instructions
  fill(200);
  textAlign(CENTER);
  textSize(16);
  text("Score: " + score, width / 2, 20);
  text("Move to catch stars • Click to restart", width / 2, 40);
}

function mousePressed() {
  // Reset all stars and score when clicked
  score = 0;
  for (let i = 0; i < numStars; i++) {
    starY[i] = random(-200, 0);
  }
}
