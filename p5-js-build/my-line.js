class MyLine{
    constructor(){
        this.px = pmouseX;
        this.py = pmouseY;
        this.x = mouseX;
        this.y = mouseY;
    }
    setDetails(strokeColor, customStrokeWeight){
        this.strokeColor = strokeColor;
        this.customStrokeWeight = customStrokeWeight;
    }
    show(){
        stroke(this.strokeColor);
        strokeWeight(random(0.1, this.customStrokeWeight));
        strokeCap(ROUND);
        strokeJoin(ROUND);
        line(this.px, this.py, this.x, this.y);
        // circle()
    }
}