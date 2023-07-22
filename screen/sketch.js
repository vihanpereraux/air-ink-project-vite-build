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

var socket
const p5Instance = new p5(p5Instance => {
  p5Instance.setup = () => {
    p5Instance.createCanvas(canvasWidth, canvasHeight);
    p5Instance.background(backgroundColor);
    
    socket = io.connect('https://air-ink-server.onrender.com/');
    socket.on('mouse', newDrawing);
  };

  function newDrawing(clientData) {
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
        break;

      case 'eraser':
        if(clientData.isFingerTouched == true){
          p5Instance.strokeWeight(40);
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
  }

  p5Instance.draw = () => {
    p5Instance.noFill();
  };

});

export default p5Instance;
