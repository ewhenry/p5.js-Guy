var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("background.gif");
  gif_createImg = createImg("background.gif");
}

function setup() {
  background(0);
  createCanvas(650,500);
  frameRate(30);
  rectMode(CENTER);
  createLoop({duration:3, gif:true});
}

function keyPressed() {
}

function keyReleased() {
}


function draw() {
  image(gif_loadImg, 50, 50);
  gif_createImg.position(50, 350);
}