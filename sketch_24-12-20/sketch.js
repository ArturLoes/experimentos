function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  noLoop();

  let stepX = random(20, 600);
  let stepY = random (20, 600);

  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      if (random() <= 0.5) {
        fill(0, 0, 0);
      } else {
      fill(0, 0, 100);
      }
      rect(gridX, gridY, stepX, stepY)
    }
  }
}

function mouseReleased() {
  loop();
}

function keyPressed(){
  if (key == 's' || key == 'S') saveCanvas('Experimento_24-12-20', 'jpg');
}
