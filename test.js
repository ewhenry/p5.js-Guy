function setup() {
  createCanvas(650,500)
  fill(255)
  frameRate(30)
  rectMode(CENTER)
  createLoop({duration:3, gif:true})
}

function keyPressed() {
}

function keyReleased() {
}


function draw() {
  background(0)
  translate(width / 2, height / 2)
  const radius = height / 3
  const x = cos(animLoop.theta) * radius
  const y = sin(animLoop.theta) * radius
  ellipse(x, y, 50, 50)
}