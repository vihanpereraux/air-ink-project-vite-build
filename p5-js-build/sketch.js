let canvasWidth = 500;
let canvasHeight = window.innerHeight;
let mouseXPosition;
let mouseYPosition;
let lines = [];
let xValues = [];
let yValues = [];
let curveValues = (10, 30, 60, 150, 10, 600, 30, 90);

// stats
let linesCount = document.getElementById('lines-count');

// properties 
let strokeColor, customStrokeWeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(20);
}

function draw() {
  // display stats
  linesCount.innerText = lines.length;

  // drawing function
  if(mouseIsPressed){

    xValues.push(winMouseX);
    yValues.push(winMouseY);
    // console.log(xValues, yValues);

    strokeColor = 255;
    customStrokeWeight = .5;
    var myLine = new MyLine();
    myLine.setDetails(strokeColor, customStrokeWeight);
    lines.push(myLine);
  }

  for (let index = 0; index < lines.length; index++) {
    lines[index].show();    
  }

  noFill();
  stroke(random(255), random(255), 0);
  strokeWeight(random(1, 5))
  // x - 10, 300
  // y - 30, 900
  smooth();
  curve(
    pmouseX, pmouseY, 
    mouseX, mouseY, 
    pmouseX, pmouseY, 
    mouseX, mouseY);
}
