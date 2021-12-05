let man;
var gif_LoadImg;

function preload() {
  gif_LoadImg = loadImage("assets/background.gif");
}

function setup() {
  createCanvas(650,500);
  frameRate(60);
  ellipseMode(CENTER);
  tint(0, 153, 204);

  man = new Guy();
}

class Guy {
  constructor() {
    this.size = 100;
    this.x = width/2;
    this.y = height/2;
  }
  render() {
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function mousePressed() {
  if (Guy.x === height/2) {
    Guy.x = height/2 + 20;
  } else {
    Guy.x = height/2;
  }
}

function draw() {
  background(0);
  image(gif_LoadImg, 0, 0, width, height);
  man.render();
}