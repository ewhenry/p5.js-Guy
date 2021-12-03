function preload() {
  img = loadImage("assets/background.gif");
}

function setup() {
  background(0);
  createCanvas(650,500);
  frameRate(60);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function keyPressed() {
}

function keyReleased() {
}


function draw() {
  //image(img, 0, 0, width, height);
  ellipse(width/2, height/2, 20, 20)
}