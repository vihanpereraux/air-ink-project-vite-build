let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let randomValue;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(10);
}

function draw() {
  randomValue = random(100, 250)

  if(mouseIsPressed){
    noStroke();
    for (let index = 0; index < 20; index++) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      circle(
        mouseX + random(randomValue, -randomValue), 
        mouseY + random(randomValue, -randomValue), 
        3); 
    }

    for (let index = 0; index < 20; index++) {
      fill(255);
      strokeWeight(4);
      line(
        mouseX, mouseY, 
        600, 900)
    }
  }
}
