let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let randomValue;
let strokeSize;
let points = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(10);
}

function draw() {
  strokeSize = 3;
  noFill();
  stroke(255);

  strokeCap();
  strokeWeight(strokeSize);
  beginShape();
    curveVertex(200, 80);
    curveVertex(200, 80);
    curveVertex(400, 200);
    curveVertex(700, 100);
    curveVertex(900, 400);
    curveVertex(900, 400);
  endShape();

  if(mouseIsPressed){
    let point = { x: mouseX, y: mouseY }
    points.push(point);

    strokeWeight(strokeSize + 3);
    beginShape();
    for (let index = 0; index < points.length; index++) {
      if(index == 0){
        curveVertex(points[index].x, points[index].y);
        curveVertex(points[index].x, points[index].y);
      }
      else if(index == (points.length -1)){
        curveVertex(points[index].x, points[index].y);
        curveVertex(points[index].x, points[index].y);
      }
      else{
        curveVertex(points[index].x, points[index].y);
      }
      // index = index + 1;
    }
    endShape();
  }
  else{
    points = [];
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    console.log(points)
  }
}