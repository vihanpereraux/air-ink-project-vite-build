import p5 from "p5";
// import socket from "socket.io";

let backgroundColor = 255;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 120;
let strokeSize;
let strokeColor;
let strokeWeightDevider= 10;
let points = [];
let clear = document.getElementById('clear');
let brushImage01;
let brushImage02;
let brushImage03;
let brushImage04;
let brushImage05;
let brushImage06;
let brushImage07;
let imageWidth = 40;
let imageHeight = 40;

var socket

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
    p5Instance.pixelDensity(5);
    p5Instance.background(backgroundColor);
    p5Instance.angleMode(p5Instance.DEEGREES);
    console.log(canvasWidth, canvasHeight)
    
    socket = io.connect('https://air-ink-server.onrender.com/');
    // socket = io.connect('http://localhost:3000/');
    socket.on('mouse', newDrawing);
  };

  function newDrawing(clientData) {
    // console.log(clientData.x)
    // console.log(clientData.y)
    imageWidth = clientData.brushSize;
    imageHeight = clientData.brushSize;

    switch (clientData.brushType) {
      case 'brush-one':
        if(clientData.isFingerTouched == true){
          points.push(clientData);

          p5Instance.stroke(clientData.brushColor);
          p5Instance.strokeWeight(clientData.brushSize);
          
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
        break;
    
      case 'brush-two':
        if(clientData.isFingerTouched == true){
          // console.log(clientData.x, clientData.y)
          // p5Instance.translate(clientData.translateX, clientData.translateY);
          // p5Instance.rotate(p5Instance.random(0.001, 0.005));
          p5Instance.image(
            brushImage02, 
            clientData.x, 
            clientData.y, 
            clientData.brushSize, 
            clientData.brushSize
          );
        }
        break;

      case 'brush-three':
        if(clientData.isFingerTouched == true){
          // p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
          // p5Instance.rotate(p5Instance.random(0.001, 0.005));
          p5Instance.image(
            brushImage03, 
            clientData.x, 
            clientData.y, 
            imageWidth, 
            imageHeight
          );
        }
        break;

      case 'brush-four':
        if(clientData.isFingerTouched == true){
          // p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
          // p5Instance.rotate(p5Instance.random(0.001, 0.005));
          p5Instance.image(
            brushImage04, 
            clientData.x, 
            clientData.y, 
            imageWidth, 
            imageHeight
          );
        }
        break;

      case 'brush-five':
        // console.log(clientData.x, clientData.y)
        if(clientData.isFingerTouched == true){
          // p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
          // p5Instance.rotate(p5Instance.random(0.001, 0.005));
          p5Instance.image(
            brushImage05, 
            clientData.x, 
            clientData.y, 
            imageWidth, 
            imageHeight
          );
        }
        break;

      case 'brush-six':
        if(clientData.isFingerTouched == true){
          // p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
          // p5Instance.rotate(p5Instance.random(0.001, 0.005));
          p5Instance.image(
            brushImage06, 
            clientData.x, 
            clientData.y, 
            imageWidth, 
            imageHeight
          );
        }
        break;

      case 'brush-seven':
        if(clientData.isFingerTouched == true){
          // console.log(clientData.x, clientData.y)
          // p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
          // p5Instance.rotate(p5Instance.random(0.001, 0.005));
          p5Instance.image(
            brushImage07, 
            clientData.x, 
            clientData.y, 
            imageWidth, 
            imageHeight
          );
        }
        break;

      case 'eraser':
        if(clientData.isFingerTouched == true){
          p5Instance.strokeWeight(clientData.brushSize);
          p5Instance.stroke(clientData.brushColor);
          p5Instance.line(clientData.x, clientData.y, clientData.x2, clientData.y2);
        }
        break;
 
      default:
        break;
    }

    if(clientData.clearCanvas){
      points = [];
      p5Instance.clear();
      p5Instance.background(backgroundColor);  
    }

    if(clientData.donwloadCanvas){
      console.log('dowwnloaded')
      p5Instance.saveCanvas(
        ('air-ink-canvas-' + 
        String(p5Instance.round(p5Instance.random(0, 10000)))), 
        'jpg'
      );
    }
  }

  p5Instance.draw = () => {
    p5Instance.translate((0 - imageWidth)/2, (0 - imageHeight)/2);
    p5Instance.noFill();
  };
});

export default p5Instance;
