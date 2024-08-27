let buttonX = 0;
let buttonY = 0;
let distanceToButton = 0.0;
let backColor = "#000000";

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  rectMode(CENTER);
  buttonX = width/2
  buttonY = height/2
}

function draw() {
  
  background(backColor);
  distanceToButton = dist(buttonX, buttonY, mouseX, mouseY);
  fill("#FFFFFF")
  rect(buttonX, buttonY, 50, 50, 15);
}

function mousePressed() {
  if (mouseIsPressed && distanceToButton <= 25) {
    buttonX = random(width*0.1, width*0.9);
    buttonY = random(height*0.1, height*0.9);
    backColor = "#000000";
  }
  if (distanceToButton > 25) {
    backColor = "#FF0000";
  }
  
}
