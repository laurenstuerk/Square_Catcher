let buttonX = 200;
let buttonY = 200;
let distanceToButton = 0.0;
let backColor = "#000000";

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(backColor);
  distanceToButton = dist(buttonX, buttonY, mouseX, mouseY);
  
  rect(buttonX*1, buttonY*1, 50, 50, 15);
  
  
  
  
}

function mousePressed() {
  if (mouseIsPressed && distanceToButton <= 25) {
    buttonX = random(30, 370);
    buttonY = random(30, 370);
    backColor = "#000000";
  }
  if (distanceToButton > 25) {
    backColor = "#FF0000";
  }
}
