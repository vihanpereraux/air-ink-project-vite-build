import p5 from "p5";
// import socket from "socket.io";

let backgroundColor = 255;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let strokeSize;
let strokeColor;
let strokeWeightDevider= 1;
let points = [];
let clear = document.getElementById('clear');
let isFingerTouched = false;
var socket;
let brushImage01;
let brushImage02;
let brushImage03;
let brushImage04;
let brushImage05;
let brushImage06;
let brushImage07;
let imageWidth;
let imageHeight;;

  
const p5Instance = new p5(p5Instance => {
  p5Instance.preload = () => {
    brushImage02 = p5Instance.loadImage('https://i.ibb.co/wBvm5nz/drawing-bush-02.png');
    brushImage03 = p5Instance.loadImage('https://i.ibb.co/cbrKTR8/drawing-bush-03.png');
    brushImage04 = p5Instance.loadImage('https://i.ibb.co/bRd93VQ/drawing-bush-04.png');
    brushImage05 = p5Instance.loadImage('https://i.ibb.co/4Md0J2Z/drawing-bush-05.png');
    brushImage06 = p5Instance.loadImage('https://i.ibb.co/B4B3pB9/drawing-bush-06.png');
    brushImage07 = p5Instance.loadImage('https://i.ibb.co/tCTLz3G/drawing-bush-07.png');
    // console.log(brushImage01);
  }

  p5Instance.setup = () => {
    p5Instance.createCanvas(canvasWidth, canvasHeight);
    p5Instance.background(backgroundColor);
    p5Instance.angleMode(p5Instance.DEEGREES);

    socket = io.connect('https://air-ink-server.onrender.com/');
    // socket.on('mouse', newDrawing);
  };

  p5Instance.draw = () => {
    strokeSize = (localStorage.getItem("brush-size"))/strokeWeightDevider;
    imageWidth = strokeSize;
    imageHeight = strokeSize;
    strokeColor = localStorage.getItem("brush-color");
    p5Instance.noFill();
    p5Instance.stroke(strokeColor);

    if(localStorage.getItem("brush-type-01") == "enabled"){
      drawfromBrush01();
    }
    if(localStorage.getItem("brush-type-02") == "enabled"){
      drawfromBrush02();
    }
    if(localStorage.getItem("brush-type-03") == "enabled"){
      drawfromBrush03();
    }
    if(localStorage.getItem("brush-type-04") == "enabled"){
      drawfromBrush04();
    }
    if(localStorage.getItem("brush-type-05") == "enabled"){
      drawfromBrush05();
    }
    if(localStorage.getItem("brush-type-06") == "enabled"){
      drawfromBrush06();
    }
    if(localStorage.getItem("brush-type-07") == "enabled"){
      drawfromBrush07();
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
        brushSize: strokeSize,
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
        brushType: 'brush-one',
        isFingerTouched
      }
      socket.emit('mouse', data);
      points = [];
    }
  }

  function drawfromBrush02(){
    if(p5Instance.mouseIsPressed){
      p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
      p5Instance.rotate(p5Instance.random(0.001, 0.005));
      p5Instance.image(
        brushImage02, 
        p5Instance.mouseX, 
        p5Instance.mouseY, 
        imageWidth, 
        imageHeight
      );
    }
  }

  function drawfromBrush03(){
    if(p5Instance.mouseIsPressed){
      p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
      p5Instance.rotate(p5Instance.random(0.001, 0.005));
      p5Instance.image(
        brushImage03, 
        p5Instance.mouseX, 
        p5Instance.mouseY, 
        imageWidth, 
        imageHeight
      );
    }
  }

  function drawfromBrush04(){
    if(p5Instance.mouseIsPressed){
      p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
      p5Instance.rotate(p5Instance.random(0.001, 0.005));
      p5Instance.image(
        brushImage04, 
        p5Instance.mouseX, 
        p5Instance.mouseY, 
        imageWidth, 
        imageHeight
      );
    }
  }

  function drawfromBrush05(){
    if(p5Instance.mouseIsPressed){
      p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
      p5Instance.rotate(p5Instance.random(0.001, 0.005));
      p5Instance.image(
        brushImage05, 
        p5Instance.mouseX, 
        p5Instance.mouseY, 
        imageWidth, 
        imageHeight
      );
    }
  }

  function drawfromBrush06(){
    if(p5Instance.mouseIsPressed){
      p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
      p5Instance.rotate(p5Instance.random(0.001, 0.005));
      p5Instance.image(
        brushImage06, 
        p5Instance.mouseX, 
        p5Instance.mouseY, 
        imageWidth, 
        imageHeight
      );
    }
  }

  function drawfromBrush07(){
    if(p5Instance.mouseIsPressed){
      p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
      p5Instance.rotate(p5Instance.random(0.001, 0.005));
      p5Instance.image(
        brushImage07, 
        p5Instance.mouseX, 
        p5Instance.mouseY, 
        imageWidth, 
        imageHeight
      );
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

      p5Instance.strokeWeight(strokeSize);
      p5Instance.stroke(backgroundColor);
      p5Instance.line(p5Instance.mouseX, p5Instance.mouseY, p5Instance.pmouseX, p5Instance.pmouseY);
    }
  }

  clear.addEventListener('click', function(){
    var data = { 
      clearCanvas: true,
      isFingerTouched : true
    }
    socket.emit('mouse', data);
    
    points = [];
    console.log(points.length);
    p5Instance.background(backgroundColor);
  });
});

export default p5Instance;
