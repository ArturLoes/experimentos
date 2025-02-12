function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(0, 0, 100);

  let stepX = random(20, 400);
  let stepY = random(20, 400);
  let pb = [];
  let colored = [random(0, 130), 100, 100];
  let col;

  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      if (random() <= 0.5) {
        pb = [0, 0, 0];
      } else {
        pb = [0, 0, 100];
      }
      if (random() <= 0.25){
        col = colored;
      } else {
        col = pb;
      }
      fill(col);
      rect(gridX, gridY, random(20, 400), stepY);
    }
  }
}

function mouseReleased() {
  loop();
}

function keyPressed(){
  if (key == 's' || key == 'S') saveCanvas('Experimento_24-12-21', 'jpg');
}
