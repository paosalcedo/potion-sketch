function setup() {
  // put setup code here
  // createCanvas(640, 480);
  createCanvas(windowWidth, windowHeight);
  background(244,224, 222);
}

function draw() {
  // put drawing code here
  // ellipse(50, 50, 80, 80);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

