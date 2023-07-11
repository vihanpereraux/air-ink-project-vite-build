let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let mouseXPosition;
let mouseYPosition;
let lines = [];
let xValues = [];
let yValues = [];
let points = [];
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
    let point = { x:mouseX, y:mouseY } 
    points.push(point);

    strokeColor = 255;
    customStrokeWeight = 0.1;
    var myLine = new MyLine();
    myLine.setDetails(strokeColor, customStrokeWeight);
    lines.push(myLine);
  }

  for (let index = 0; index < lines.length; index++) {
    lines[index].show();    
  }
}
