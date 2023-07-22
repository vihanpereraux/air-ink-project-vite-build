import p5 from "p5";
// import socket from "socket.io";

let backgroundColor = 20;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let strokeSize;
let strokeColor;
let strokeWeightDevider= 10;
let points = [];
let clear = document.getElementById('clear');
let isFingerTouched = false;

var socket
const p5Instance = new p5(p5Instance => {
  p5Instance.setup = () => {
    p5Instance.createCanvas(canvasWidth, canvasHeight);
    p5Instance.background(backgroundColor);
    
    socket = io.connect('http://localhost:3000');
    // socket.on('mouse', newDrawing);
  };

  p5Instance.draw = () => {
    strokeSize = (localStorage.getItem("brush-size"))/strokeWeightDevider;
    strokeColor = localStorage.getItem("brush-color");
    p5Instance.noFill();
    p5Instance.stroke(strokeColor);

    if(localStorage.getItem("brush-type-01") == "enabled"){
      drawfromBrush01();
    }
    if(localStorage.getItem("brush-type-02") == "enabled"){
      drawfromBrush02();
    }
    if(localStorage.getItem("eraser") == "enabled"){
      eraseSketch();
    }
  };
  
  function drawfromBrush01(){
    if(p5Instance.mouseIsPressed){
      let point = { x: p5Instance.mouseX, y: p5Instance.mouseY }
      points.push(point);

      console.log(point);

      var data = { 
        x: point.x,
        y: point.y,
        brushType: 'brush-one',
        brushColor: strokeColor,
        isFingerTouched : true
      }
      socket.emit('mouse', data);
  
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
      var data = { 
        brushType: 'brush-one',
        isFingerTouched
      }
      socket.emit('mouse', data);
      points = [];
    }
  }

  function drawfromBrush02(){
    if(p5Instance.mouseIsPressed){
      let point = { x: p5Instance.mouseX, y: p5Instance.mouseY }
      points.push(point);

      var data = { 
        x: point.x,
        y: point.y,
        brushType: 'brush-two',
        brushColor: strokeColor,
        isFingerTouched : true
      }
      socket.emit('mouse', data);
  
      p5Instance.strokeWeight(strokeSize);
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
      var data = { 
        brushType: 'brush-two',
        isFingerTouched
      }
      socket.emit('mouse', data);
    }
  }

  function eraseSketch(){
    if(p5Instance.mouseIsPressed){
      var data = { 
        x: p5Instance.mouseX,
        y: p5Instance.mouseY,
        x2: p5Instance.pmouseX,
        y2: p5Instance.pmouseY,
        brushType: 'eraser',
        brushColor: backgroundColor,
        isFingerTouched : true
      }
      socket.emit('mouse', data);

      p5Instance.strokeWeight(40);
      p5Instance.stroke(backgroundColor);
      p5Instance.line(p5Instance.mouseX, p5Instance.mouseY, p5Instance.pmouseX, p5Instance.pmouseY);
    }
  }

  clear.addEventListener('click', function(){
    p5Instance.clear();
    p5Instance.background(backgroundColor);
  });
});

export default p5Instance;
