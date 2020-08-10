var x = 0;
var y = 0;
var spacing = 35;


function setup() {
  createCanvas(1000, 400);
  background(0);
}

function draw() {
  stroke(255);
  if(random(9) > 2) {
    line(x, y, x + spacing, y + spacing);
  }
  else{
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;

  if(x > width){
    x = 0;
    y = y + spacing;
  }
}