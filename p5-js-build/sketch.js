let points = []; // Array to store the cursor positions

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
  // No code needed here for this example
}

function mouseDragged() {
  let point = { x: mouseX, y: mouseY };
  points.push(point);

  // Set stroke properties
  noFill();
  stroke(255);
  strokeWeight(random(0.01, 1));

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
