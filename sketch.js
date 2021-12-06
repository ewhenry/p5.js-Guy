var gif_LoadImg, i = 0, j = 0;
let fr = 60;

function preload() {
  gif_LoadImg = loadImage("assets/background.gif");
}

function DeBug() {
  push();
  fill(255);
  textSize(25);
  text(int(getFrameRate()), width - 50, 50);
  pop();
}

class Guy {
  constructor() {
    this.x = width/2;
    this.y = height/2;

    this.minSize = 300;
    this.maxSize = 325;
    
    this.size = 300;
  }
  render() {

    this.size = constrain(this.size, this.minSize, this.maxSize);

    push();
    noStroke();
    fill(230, 100);
    ellipse(this.x+13, this.y-13, this.size, this.size);
    pop();

    push();
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    pop();

    // NOSE

    push();
    noStroke();
    fill(0);
    ellipse(this.x, this.y-15, this.size/12, this.size/8);
    pop();

    push();
    noStroke();
    fill(0);
    ellipse(this.x, this.y-3, this.size/8, this.size/12);
    pop();

    push();
    noStroke();
    fill(255);
    ellipse(this.x+6, this.y+5, this.size/50, this.size/50);
    ellipse(this.x-6, this.y+5, this.size/50, this.size/50);
    pop();
  }

  blinking() {

    j += 1;

    if (j >= 140) {
      j = 0;
    }

    if (j >= 125) {
      push();
      noStroke();
      fill(255);
      rect(this.x-50, this.y-60, this.size/8, this.size/8);
      rect(this.x+50, this.y-60, this.size/8, this.size/8);
      pop();

      push();
      noStroke();
      fill(0);
      rect(this.x-50, this.y-60, this.size/8, this.size/18, 30, 30, 30, 30);
      rect(this.x+50, this.y-60, this.size/8, this.size/18, 30, 30, 30, 30);
      pop();
    } else {
      push();
      noStroke();
      fill(0);
      ellipse(this.x-50, this.y-60, this.size/8, this.size/8);
      ellipse(this.x+50, this.y-60, this.size/8, this.size/8);
      pop();
    }
  }

  talking() {

    this.size = constrain(this.size, this.minSize, this.maxSize);

    if (mouseIsPressed == true) {
      this.size += 20;

      i += 1;

      if (i >= 20) {
        i = 0;
      }

      if (i >= 10) {
        push();
        fill(0);
        rect(this.x, this.y+55, this.size/2, this.size/14, 30, 30, 30, 30);
        pop();
      } else {
  
        push();
        fill(0);
        noStroke();
        ellipse(this.x, this.y+55, this.size/2, this.size/4);
        pop();
      }
    } else {

      i = 0;

      this.size -= 10;

      push();
      fill(0);
      rect(this.x, this.y+55, this.size/2, this.size/14, 30, 30, 30, 30);
      pop();
    }
  }
}

function setup() {
  createCanvas(650,500);
  frameRate(fr);
  ellipseMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
  tint(0, 153, 204);
  man = new Guy();
}

function draw() {

  console.log(j);

  background(0);
  image(gif_LoadImg, 0, 0, width, height);

  DeBug();

  man.render();
  man.talking();
  man.blinking();
}