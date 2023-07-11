class MyLine{
    constructor(){
        this.px = pwinMouseX;
        this.py = pwinMouseY;
        this.x = winMouseX;
        this.y = winMouseY;
    }
    setDetails(strokeColor, customStrokeWeight){
        this.strokeColor = strokeColor;
        this.customStrokeWeight = customStrokeWeight;
    }
    show(){
        stroke(200);
        strokeWeight(random(this.customStrokeWeight, 2));
        line(this.px, this.py, this.x, this.y);
        // circle()
    }
}