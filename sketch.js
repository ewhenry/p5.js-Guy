var gif_LoadImg;
let fr = 60;

function preload() {
  gif_LoadImg = loadImage("assets/background.gif");
}

function DeBug() {
  push();
  fill(255);
  textSize(25);
  text(int(getFrameRate()), width - 50, 50);
  text(man.sizeC, width/2, 100);
  pop();
}

class Guy {
  constructor() {
    this.x = width/2;
    this.y = height/2;

    this.minSize = 100;
    this.maxSize = 150;
    
    this.size = 100;
    this.sizeC = constrain(this.size, this.minSize, this.maxSize);
  }
  render() {
    ellipse(this.x, this.y, this.sizeC, this.sizeC);
  }

  interact() {
      if (mouseIsPressed == true) {
        this.size += 5;
      }
      else if (mouseIsPressed == false) {
        this.size -= 2;
      }
    }
}

function setup() {
  createCanvas(650,500);
  frameRate(fr);
  ellipseMode(CENTER);
  tint(0, 153, 204);
  man = new Guy();
}

function draw() {
  background(0);
  //image(gif_LoadImg, 0, 0, width, height);

  DeBug();

  man.render();
  man.interact();
}