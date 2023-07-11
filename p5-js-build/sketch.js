let points = []; // Array to store the cursor positions

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
  frameRate(30)
  if (mouseIsPressed){
    let point = { x: mouseX, y: mouseY };
    points.push(point);
  }


  noFill();
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(random(1, 2));

  // Draw the curve using the stored cursor positions
  if (points.length > 1) {
    beginShape();
    curveVertex(points[0].x, points[0].y);
    for (let i = 0; i < points.length; i++) {
      let { x, y } = points[i];
      curveVertex(x, y);
    }
    curveVertex(points[points.length - 1].x, points[points.length - 1].y);
    endShape();
  }
}

