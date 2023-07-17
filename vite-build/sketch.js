import p5 from "p5";

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let randomValue;
let strokeSize;
let points = [];


const p5Instance = new p5(p5Instance => {
  p5Instance.setup = () => {
    p5Instance.createCanvas(canvasWidth, canvasHeight);
    p5Instance.background(10);
  };

  p5Instance.draw = () => {
    p5Instance.fill(255);

    strokeSize = 3;
    p5Instance.noFill();
    p5Instance.stroke(255);

    p5Instance.strokeCap();
    p5Instance.strokeWeight(strokeSize);
    p5Instance.beginShape();
      p5Instance.curveVertex(200, 80);
      p5Instance.curveVertex(200, 80);
      p5Instance.curveVertex(400, 200);
      p5Instance.curveVertex(700, 100);
      p5Instance.curveVertex(900, 400);
      p5Instance.curveVertex(900, 400);
    p5Instance.endShape();

    if(p5Instance.mouseIsPressed){
      let point = { x: p5Instance.mouseX, y: p5Instance.mouseY }
      points.push(point);
  
      p5Instance.strokeWeight(strokeSize + 3);
      p5Instance.beginShape();
      for (let index = 0; index < points.length; index++) {
        if(index == 0){
          p5Instance.curveVertex(points[index].x, points[index].y);
          p5Instance.curveVertex(points[index].x, points[index].y);
        }
        else if(index == (points.length -1)){
          p5Instance.curveVertex(points[index].x, points[index].y);
          p5Instance.curveVertex(points[index].x, points[index].y);
        }
        else{
          p5Instance.curveVertex(points[index].x, points[index].y);
        }
        // index = index + 1;
      }
      p5Instance.endShape();
    }
    else{
      points = [];
    }
  };

  p5Instance.keyPressed =() => {
    if(p5Instance.keyCode === p5Instance.LEFT_ARROW){
      console.log(points)
    }
  }
});

export default p5Instance;
