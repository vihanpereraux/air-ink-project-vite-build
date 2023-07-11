class MyLine{
    constructor(){
        this.px = pwinMouseX;
        this.py = pwinMouseY;
        this.x = winMouseX;
        this.y = winMouseY;
    }
    setDetails(strokeColor, strokeWeight){
        this.strokeColor = strokeColor;
        this.customStrokeWeight = customStrokeWeight;
    }
    show(){
        stroke(this.strokeColor);
        strokeWeight(this.customStrokeWeight);
        line(this.px, this.py, this.x, this.y);
    }
}